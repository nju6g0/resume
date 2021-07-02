import React, { useState, useRef, useEffect } from 'react';

import GoHome from 'Component/GoHome';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const GarellyFavotite = () => {
    return (
        <div className={cx('garellyFavotite')}>
            GarellyFavotite Coming Soon...
            <GoHome />
        </div>
    );
};

export default GarellyFavotite;
