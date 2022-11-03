import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import img_orbit from "image/F2E_web/orbit.png";
import img_aliens from "image/F2E_web/aliens.png";
import Button from "./Button";
import DataLayout from "./DataLayout";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const datas = [
  { text: "Total", number: 1035 },
  { text: "Personal", number: 979 },
  { text: "Team", number: 56 },
];

const BlockA = () => {
  return (
    <div className={cx("blockA")}>
      <div className={cx("left")}>
        <div className={cx("info")}>
          <img src={img_orbit} alt="projector" />
          <Button text="我 要 報 名 " icon={<BsArrowUpRight />} width={240} />
          <div className={cx("datas")}>
            {datas.map((data) => (
              <DataLayout {...data} />
            ))}
          </div>
          <img src={img_aliens} alt="alients" />
        </div>
        <div className={cx("texts")}>
          <h2>The F2E</h2>
          <p>互動式網頁設計!</p>
        </div>
      </div>
      <div className={cx("right")}>
        <p>4th</p>
        {Array.from({length:50}, (x,i) => i).map(star => <div className={cx("star")} />)}
      </div>
    </div>
  );
};

export default BlockA;
