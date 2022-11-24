import React from "react";
import PropTypes from "prop-types";

import { ROLE_NAMES } from "./Role";
import classes from "../styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const GREEN = "green";
const PURPLE = "purple";
const RED = "red";
const YELLOW = "yellow";
const THEMES = {
  [ROLE_NAMES.PO]: GREEN,
  [ROLE_NAMES.MM]: PURPLE,
  [ROLE_NAMES.GG]: RED,
  [ROLE_NAMES.EE]: YELLOW,
};

const Dialog = ({ speaker, children, isShowTriangle }) => (
  <div className={cx("dialog", THEMES[speaker])}>
    <div className={cx("speaker")}>{speaker}</div>
    {children}
    {isShowTriangle && <div className={cx("triangle")} />}
  </div>
);

Dialog.defaultProps = {
  children: "",
  isShowTriangle: false
};
Dialog.propTypes = {
  speaker: PropTypes.string.isRequired,
  children: PropTypes.any,
  isShowTriangle: PropTypes.bool
};

export default Dialog;
