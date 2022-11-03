import React from "react";
import PropTypes from "prop-types";

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

DataLayout.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default DataLayout;
