import React from "react";

import img_planning_team from "image/F2E_scrum/planning_team.png";
import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const NotAvailable = () => {
  

  return (
    <div className={cx("notAvailable")}>
      <img src={img_planning_team} alt="" />
      <p>唉呀！此版本僅能使用電腦操作…<br/>，請使用電腦開啟頁面。</p>
    </div>
  );
};

export default NotAvailable;
