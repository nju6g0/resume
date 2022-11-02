import React from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Sign = () => {
  return <div className={cx("wrapper")}>今晚，我想來點點簽</div>;
};

export default Sign;
