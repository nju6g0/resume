import React, { useState } from "react";

import img_logo from "image/F2E_scrum/logo_txt.png";
import img_leaf_top from "image/F2E_scrum/bg_leafTint_3_t.png";
import img_leaf_right from "image/F2E_scrum/bg_leafTint_4_rb.png";
import img_leaf_bottom from "image/F2E_scrum/bg_leafTint_2_lb.png";
import img_leaf_left from "image/F2E_scrum/bg_leafTint_1_lt.png";
import Button from "./Button";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Entry = () => {
  return (
    <div className={cx("entry")}>
      <img src={img_leaf_top } alt="" />
      <img src={img_leaf_right} alt="" />
      <img src={img_leaf_bottom} alt="" />
      <img src={img_leaf_left} alt="" />
      <div className={cx("info")}>
        <div className={cx("logoBox")}>
          <img src={img_logo} alt="logo" />
        </div>
        <p>深入敏捷の村一探究竟</p>
        <div className={cx("buttonContainer")}>
          <Button text="進入村莊" type="secondary" />
        </div>
      </div>
      <div className={cx("star", "star1", "purple")}/>
      <div className={cx("star", "star2", "red")}/>
      <div className={cx("star", "star3", "yellow")}/>
      <div className={cx("star", "star4", "purple")}/>
      <div className={cx("star", "star5", "red")}/>
      <div className={cx("star", "star6", "yellow")}/>
    </div>
  );
};
export default Entry;
