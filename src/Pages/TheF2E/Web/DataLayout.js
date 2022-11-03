import React from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const DataLayout = ({ text, number }) => {
  return (
    <div className={cx("dataLayout")}>
      <span>{text}</span>
      <div></div>
      <span>{number}</span>
    </div>
  );
};

export default DataLayout;
