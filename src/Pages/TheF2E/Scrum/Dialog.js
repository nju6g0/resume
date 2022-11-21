import React from "react";
import PropTyps from "prop-types";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

export const Context = React.createContext();

const Dialog = ({ speaker, children, color }) => (
  <div
    className={cx("dialog")}
    style={{ borderColor: color, boxShadow: `0 0 10px ${color}` }}
  >
    <div className={cx("speaker")} style={{ backgroundColor: color }}>
      {speaker}
    </div>
    {children}
    <div
      className={cx("triangle")}
      style={{ backgroundColor: color, borderTop: `20px solid ${color}` }}
    />
  </div>
);

Dialog.defaultProps = {
  children: "",
  color: null,
};
Dialog.propType = {
  speaker: PropTyps.string.isRequired,
  children: PropTyps.any,
  color: PropTyps.string,
};

export default Dialog;
