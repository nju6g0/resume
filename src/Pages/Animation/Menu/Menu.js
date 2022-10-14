import React from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Menu = ({ index, list, onClick }) => {
  return (
    <div className={cx("container")}>
      {list.map((item, idx) => (
        <span
          className={index === idx && cx("highLight")}
          key={item.key}
          onClick={() => {
            onClick(idx);
          }}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
};

export default Menu;
