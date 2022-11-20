import React from "react";
import PropTyps from "prop-types";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

export const Context = React.createContext();

const Dialog = ({ speaker, children }) => (
  <div className={cx("dialog")}>
    <div className={cx("speaker")}>{speaker}</div>
    {children}
  </div>
);

Dialog.defaultProps = {
  children: ''
};
Dialog.propType = {
  speaker: PropTyps.string.isRequired,
  children: PropTyps.any
};

export default Dialog;
