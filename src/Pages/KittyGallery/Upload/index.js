import React, { useState, useRef, useEffect } from 'react';

import GoHome from 'Component/GoHome';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const GarellyUpload = () => {
    return (
        <div className={cx('garellyUpload')}>
            GarellyUpload Coming Soon...
            <GoHome />
        </div>
    );
};

export default GarellyUpload;
