import React from "react";
import PropTyps from "prop-types";

import classes from "../styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const DEFAULT = "default";
const OUTLINE = "outline";
export const BUTTON_TYPES = {
  DEFAULT,
  OUTLINE
}

const Button = ({ type, text, onClick, disabled }) => {
  return (
    <button
      type="button" 
      className={cx("button", type)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: DEFAULT,
  disabled: false,
  onClick: () => {},
};
Button.propType = {
  type: PropTyps.oneOf([DEFAULT, OUTLINE]),
  text: PropTyps.string.isRequired,
  disabled: PropTyps.bool,
  onClick: PropTyps.func,
};

export default Button;
