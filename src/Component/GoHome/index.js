import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { BsHouseFill } from 'react-icons/bs';
import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const GoHome = () => {
    return (
        <Link to={`/`} className={cx('home')}>
            <BsHouseFill />
        </Link>
    );
};

export default withRouter(GoHome);
