import React from "react";

import classes from "../styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Wave = () => {
    return (
        <div className={cx('wave')}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Wave;
