import React, { useEffect, useState, useRef } from "react";

import img_div from "image/F2E_web/topic_div.png";
import img_design from "image/F2E_web/topic_design.png";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Topic = () => {
  const blockRef = useRef(null);
  const [isReach, setIsReach] = useState(false);

  useEffect(() => {
    const offsetTop = blockRef.current?.offsetTop;
    const handleScroll = () => {
      if(window.scrollY >= offsetTop){
        setIsReach(true);
        document.removeEventListener("scroll", handleScroll);
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={blockRef} className={cx("topic")}>
      <div className={cx("top")}>
        <p>互動式網頁設計</p>
        <div {...(isReach && { className: cx("active") })}>
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
