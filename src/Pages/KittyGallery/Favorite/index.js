import React, { useState, useRef, useEffect, Fragment } from 'react';
import { from } from 'rxjs';

import { withAuthConsumer } from 'Context/Auth';
import { getFavoriteListAPI, deleteFavouritesAPI } from 'apis/gallery';
import Loading from 'Component/Loading';
import GoHome from 'Component/GoHome';

import { BsFillHeartFill } from 'react-icons/bs';
import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const GarellyFavotite = ({ authData }) => {
    const fetchListener = useRef(null);
    const { token } = authData;

    const [removeTarget, setRemoveTarget] = useState(null);
    const [listData, setListData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const removeFavorite = () => {
            if (removeTarget) {
                const params = {
                    favoriteId: removeTarget,
                };
                fetchListener.current = from(deleteFavouritesAPI(params, token)).subscribe((res) => {
                    if (res.status === 200) {
                        setListData([...listData.filter((img) => img.id !== removeTarget)]);
                        setRemoveTarget(null);
                    }
                });
            }
        };
        if (removeTarget) {
            removeFavorite();
        }
    }, [removeTarget]);

    useEffect(() => {
        const params = {
            params: {
                limit: 100,
                page: 0,
            },
        };
        fetchListener.current = from(getFavoriteListAPI(params, token)).subscribe((res) => {
            if (res.status === 200) {
                setListData([...res.data]);
                setIsLoading(false);
            }
        });
    });

    if (isLoading) return <Loading />;
    return (
        <div className={cx('garellyFavotite')}>
            My Favorite
            <div className={cx('imgs')}>
                {listData.map((img) => (
                    <div key={img.id}>
                        {removeTarget === img.id ? (
                            <Loading />
                        ) : (
                            <Fragment>
                                <img src={img.image.url} alt="" />
                                <div
                                    className={cx('favorite')}
                                    onClick={() => {
                                        setRemoveTarget(img.id);
                                    }}
                                >
                                    <BsFillHeartFill />
                                </div>
                            </Fragment>
                        )}
                    </div>
                ))}
            </div>
            <GoHome />
        </div>
    );
};

export default withAuthConsumer(GarellyFavotite);
