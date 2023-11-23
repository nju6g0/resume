import React from 'react';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const Snake = () => {
    return (
        <div className={cx('wrap')}>
            <h1>Snake</h1>
        </div>
    );
};

export default Snake;
