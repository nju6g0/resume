import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { from } from 'rxjs';
import { InView } from 'react-intersection-observer';

import { withAuthConsumer } from 'Context/Auth';
import { withPopWindowConsumer } from 'Context/PopWindow';
import { getImagesListAPI, postFavouritesAPI, deleteFavouritesAPI } from 'apis/gallery';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const GarellyList = ({ authData, popWindowData }) => {
    const fetchListener = useRef(null);
    const { openPopWindowFunc } = popWindowData;
    const { isLogin, token } = authData;
    const [listData, setListData] = useState({
        nowPage: 0,
        isRest: true,
        list: [[], [], []],
    });
    const [favoriteList, setFavoriteList] = useState([]);

    const removeFavorite = (imageId) => {
        const params = {
            favoriteId: favoriteList.find((el) => el.imageId === imageId).favoriteId,
        };
        fetchListener.current = from(deleteFavouritesAPI(params, token)).subscribe((res) => {
            if (res.status === 200) {
                setFavoriteList([...favoriteList.filter((item) => item.imageId !== imageId)]);
            }
        });
    };

    const setFavorite = (imageId) => {
        const params = {
            image_id: imageId,
        };
        fetchListener.current = from(postFavouritesAPI(params, token)).subscribe((res) => {
            if (res.status === 200) {
                setFavoriteList([{ imageId: imageId, favoriteId: res.data.id }, ...favoriteList]);
            }
        });
    };
    const getList = () => {
        const params = {
            params: {
                limit: 9,
                page: listData.nowPage,
            },
        };
        fetchListener.current = from(getImagesListAPI(params)).subscribe((res) => {
            if (res.status === 200) {
                setListData((prevState) => ({
                    ...prevState,
                    list: [
                        [...prevState.list[0], ...res.data.slice(0, 3)],
                        [...prevState.list[1], ...res.data.slice(3, 6)],
                        [...prevState.list[2], ...res.data.slice(6)],
                    ],
                    isRest: false,
                }));
            }
        });
    };

    useEffect(() => {
        setListData({
            nowPage: 0,
            isRest: true,
            list: [[], [], []],
        });
    }, [isLogin]);

    useEffect(() => {
        if (listData.isRest) {
            getList();
        }
    }, [listData.isRest]);
    return (
        <div className={cx('garellyList')}>
            <div className={cx('imgs')}>
                {Array.from(['first', 'seocnd', ' third'], (x, i) => x).map((colum, idx) => (
                    <div className={cx('colum', colum)}>
                        {listData.list[idx].map((img) => (
                            <div key={img.id}>
                                <img src={img.url} alt="" />
                                <div
                                    className={cx('favorite')}
                                    onClick={() => {
                                        if (isLogin) {
                                            if (favoriteList.some((el) => el.imageId === img.id)) {
                                                removeFavorite(img.id);
                                            } else {
                                                setFavorite(img.id);
                                            }
                                        } else {
                                            openPopWindowFunc({
                                                popContent: <div className={cx('alert')}>please login to continue</div>,
                                            });
                                        }
                                    }}
                                >
                                    {favoriteList.some((el) => el.imageId === img.id) ? (
                                        <BsFillHeartFill />
                                    ) : (
                                        <BsHeart />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {listData.nowPage < 10 && (
                <InView
                    as="div"
                    onChange={(inView) => {
                        setListData((prevState) => ({
                            ...prevState,
                            nowPage: prevState.nowPage + 1,
                            isRest: true,
                        }));
                    }}
                >
                    <div className={cx('trigger')} />
                </InView>
            )}
        </div>
    );
};

export default withRouter(withAuthConsumer(withPopWindowConsumer(GarellyList)));
