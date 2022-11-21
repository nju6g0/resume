import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const GREEN = "green";
const YELLOW = "yellow";
export const LIST_THEME = {
  GREEN,
  YELLOW,
};
const SOLID = "solid";
const DASHED = "dashed";
export const LIST_ITEM_TYPE = {
  SOLID,
  DASHED,
};

const Item = ({ children, theme = GREEN, type = SOLID }) => {
  return <div className={cx("listItem", theme, type)}>{children}</div>;
};

const List = ({ title, subtitle, children, theme }) => (
  <div className={cx("list", theme)}>
    <div className={cx("header")}>
      <p>{title}</p>
      <p>{subtitle} </p>
    </div>
    <div className={cx("body")}>{children}</div>
  </div>
);

List.defaultProps = {
  subtitle: "",
  children: null,
  theme: GREEN,
};
List.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.any,
  theme: PropTypes.oneOf([GREEN, YELLOW]),
};

List.Item = Item;

export default List;
