import React from "react";

import classes from "../styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Giant = () => {
  return (
    <section className={cx("gaint")}>
      <div className="container">
        <h1>
          我<br />是<br />胖<br />虎<br />我<br />是<br />孩<br />子<br />王
          <br />
        </h1>
      </div>
    </section>
  );
};

export default Giant;
