import React from 'react';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const Loading = () => {
    return <div className={cx('loader')}></div>;
};

export default Loading;
