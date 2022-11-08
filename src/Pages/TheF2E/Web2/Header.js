import React from "react";

import { BsList } from "react-icons/bs";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Header = ({percent}) => {

  return (
    <div className={cx("header")}>
        <div>
            <h1>THE F2E</h1>
            <ul>
                <li>關卡資訊</li>
                <li>作品列表</li>
                <li>攻略資源</li>
                <li>求職專區</li>
                <li>我要報名</li>
            </ul>
            <div className={cx("menu")}>
                <BsList/>
            </div>
        </div>
    </div>
  );
};

export default Header;
