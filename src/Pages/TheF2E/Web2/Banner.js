import React from "react";

import { BsArrowRightShort } from "react-icons/bs";
import img_caterpillar from 'image/F2E_web/caterpillar.png';
import img_butterfly from 'image/F2E_web/butterfly.png';

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Banner = ({percent}) => {

  return (
    <div className={cx("banner")}>
          <div>
            <div className={cx("left")}>
              <p>I don't<br/> have time...</p>
              <p>WOW！<br/>修煉精神時光屋</p>
              <div className={cx("circlesmall")}></div>
              <div className={cx("circleBig")}></div>
              <div className={cx("triangle")}></div>
              <div className={cx("rectangle")}></div>
            </div>
            <div className={cx("middle")}>
              <p>4th</p>
              <h2>THEF2E</h2>
              <h4>互動式網頁設計</h4>
              <h6>前端 &amp; UI 修煉精神時光屋</h6>
            </div>
            <div className={cx("right")}>
              <div className={cx("imgBox")}>
                <img src={img_caterpillar} alt='caterpillar' />
                <img src={img_butterfly} alt='butterfly' />
              </div>
              <p> ummm...</p>
              <div className={cx("text")}>
                <p>butterfly</p>
                <p>~Timeflies~</p>
              </div>
            </div>
          </div>
          <button className={cx("applyButton")}>點擊立刻報名<BsArrowRightShort /></button>
          <div className={cx("footer")}>
            <div>
              {Array.from({length:10},(x,i)=>i).map(el => <><p>THEF2E </p>&nbsp;&nbsp;&nbsp;&nbsp;</>)}
            </div>
          </div>
    </div>
  );
};

export default Banner;
