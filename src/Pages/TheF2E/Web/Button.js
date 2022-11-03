import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Button = ({ text, icon, width }) => (
  <button
    type="button"
    className={cx("button")}
    style={{ width, height: width / 3, fontSize: width / 10 }}
  >
    {text}
    {icon}
  </button>
);

Button.defaultProps = {
  width: 90,
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.number,
};

export default Button;
