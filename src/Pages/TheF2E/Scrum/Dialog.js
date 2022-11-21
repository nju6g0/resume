import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const GREEN = "green";
const PURPLE = "purple";
const RED = "red";
const YELLOW = "yellow";
export const DIALOG_THEMES = {
  GREEN,
  PURPLE,
  RED,
  YELLOW,
};

const Dialog = ({ speaker, children, theme, isShowTriangle }) => (
  <div className={cx("dialog", theme)}>
    <div className={cx("speaker")}>{speaker}</div>
    {children}
    {isShowTriangle && <div className={cx("triangle")} />}
  </div>
);

Dialog.defaultProps = {
  children: "",
  theme: GREEN,
  isShowTriangle: false
};
Dialog.propTypes = {
  speaker: PropTypes.string.isRequired,
  children: PropTypes.any,
  theme: PropTypes.oneOf([GREEN, PURPLE, RED, YELLOW]),
  isShowTriangle: PropTypes.bool
};

export default Dialog;
