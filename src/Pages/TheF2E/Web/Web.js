import React from "react";

import BlockA from "./BlockA";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Web = () => {
  return (
    <div className={cx("wrapper")}>
      <BlockA />
    </div>
  );
};

export default Web;
