import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { from } from 'rxjs';
import { InView } from 'react-intersection-observer';

import { getImagesListAPI } from 'apis/gallery';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const GarellyList = () => {
    const fetchListener = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [listData, setListData] = useState({
        nowPage: 0,
        isRest: true,
        list: [[], [], []],
    });

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
            setIsLoading(false);
        });
    };

    useEffect(() => {
        if (listData.isRest) {
            getList();
        }
    }, [listData.isRest]);
    return (
        <div className={cx('garellyList')}>
            GarellyList
            <div className={cx('imgs')}>
                <div className={cx('colum', 'first')}>
                    {listData.list[0].map((img) => (
                        <div key={img.id}>
                            {/* style={{ height: `${img.height * (300 / img.width)}px` }} */}
                            <img src={img.url} alt="" />
                        </div>
                    ))}
                </div>
                <div className={cx('colum', 'second')}>
                    {listData.list[1].map((img) => (
                        <div key={img.id}>
                            <img src={img.url} alt="" />
                        </div>
                    ))}
                </div>
                <div className={cx('colum', 'third')}>
                    {listData.list[2].map((img) => (
                        <div key={img.id}>
                            <img src={img.url} alt="" />
                        </div>
                    ))}
                </div>
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

export default withRouter(GarellyList);
