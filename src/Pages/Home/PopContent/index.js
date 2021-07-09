import React from 'react';

import classes from './styles.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

const PopContent = ({ data }) => {
    return (
        <div className={`${cx('popContent')} row gx-0`}>
            <div className={`${cx('imgBox')} col-md-8`}>
                <img src={data.image} alt="totoro" />
            </div>
            <div className={`${cx('describe')} col-md-4`}>
                <h6>{data.subTitle}</h6>
                <small>{data.title}</small>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default PopContent;
