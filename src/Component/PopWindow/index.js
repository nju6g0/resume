import React from 'react';

import { withPopWindowConsumer } from 'Context/PopWindow';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const PopWidnow = ({ popWindowData }) => {
    const { isOpenPopWindow, closePopWindowFunc, popContent } = popWindowData;

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
                <div>{popContent}</div>
            </div>
        </div>
    );
};

export default withPopWindowConsumer(PopWidnow);
