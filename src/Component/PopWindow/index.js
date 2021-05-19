import React, { useState, useRef, useEffect } from 'react';

import { withPopWindowConsumer } from 'Context/PopWindow';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const PopWidnow = ({ popWindowData }) => {
    const { isOpenPopWindow, openPopWindowFunc, closePopWindowFunc, component } = popWindowData;

    useEffect(() => {
        console.log(popWindowData);
    }, []);

    if (!isOpenPopWindow) return null;
    return (
        <div className={cx('box')}>
            <div className={cx('container')}>
                <div className={cx('close')}>
                    <div onClick={closePopWindowFunc}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={cx('popContent')}></div>
            </div>
        </div>
    );
};

export default withPopWindowConsumer(PopWidnow);
