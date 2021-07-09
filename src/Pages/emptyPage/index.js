import React from 'react';

import GoHome from 'Component/GoHome';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const Sample = () => {
    return (
        <div className={cx('emptyPage')}>
            <GoHome />
        </div>
    );
};

export default Sample;
