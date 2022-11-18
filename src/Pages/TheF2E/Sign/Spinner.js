import React from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Spinner = () => {
  return (
    <div className={cx("spinner")}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
