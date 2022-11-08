import React from "react";

import img_div from "image/F2E_web/topic_div.png";
import img_design from "image/F2E_web/topic_design.png";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Topic = () => {
  return (
    <div className={cx("topic")}>
      <div className={cx("top")}>
        <p>互動式網頁設計</p>
        <div>
          <img src={img_div} alt="" />
          <img src={img_design} alt="" />
        </div>
      </div>
      <div className={cx("bottom")}>
          <p>年度最強合作</p>
          <p>三大主題來襲</p>
          <p>各路廠商強強聯手！<br/>共同設計出接地氣的網頁互動挑戰關卡</p>
      </div>
    </div>
  );
};

export default Topic;
