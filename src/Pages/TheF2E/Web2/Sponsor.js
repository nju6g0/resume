import React, { useState, useEffect, useRef } from "react";

import { BsStars } from "react-icons/bs";
import img_block from "image/F2E_web/sponsor_block.png";
import img_kdan from "image/F2E_web/sponsor_kdan.png";
import img_titan from "image/F2E_web/sponsor_titan.png";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Sponsor = () => {
  const areaRef = useRef(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const offsetTop = areaRef.current?.offsetTop;
    const handleScroll = () => {
      if(window.scrollY >= offsetTop - 200){
        setIsShow(true);
        document.removeEventListener("scroll", handleScroll);
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={areaRef} className={cx("sponsor", isShow && "active")}>
      <p>
        <BsStars />
        本次活動贊助單位
        <BsStars />
      </p>
      <div {...(isShow && { className: cx("active") })}>
        <div className={cx("imgBox")}>
          <img src={img_kdan} alt="kdan mobile" />
        </div>
        <div className={cx("imgBox")}>
          <img src={img_titan} alt="titan soft" />
        </div>
        <div className={cx("imgBox")}>
          <img src={img_block} alt="block studio" />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
