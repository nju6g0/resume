import React, { useState, useRef, useEffect } from 'react';

import GoHome from 'Component/GoHome';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const GarellyLogin = () => {
    return (
        <div className={cx('garellyLogin')}>
            GarellyLogin
            <GoHome />
        </div>
    );
};

export default GarellyLogin;
