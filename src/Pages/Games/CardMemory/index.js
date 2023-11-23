import React from 'react';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const CardMemory = () => {
    return (
        <div className={cx('wrap')}>
            <h1>CardMemory</h1>
        </div>
    );
};

export default CardMemory;
