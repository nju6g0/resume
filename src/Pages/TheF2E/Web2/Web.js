import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Header from  "./Header";
import Banner from "./Banner";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Web = () => {
  const [percent, setPercent] = useState(0);
  const [isShowLoading, setIsShowLoading] = useState(true);

  useEffect(() => {
    let time = 0;
    function countDown() {
      if (time < 100) {
        time += 2;
        setPercent(time);
      } else {
        clearInterval(counter);
        setTimeout(()=>{
            setIsShowLoading(false);
        }, 500)
      }
    }
    const counter = setInterval(countDown, 50);
  }, []);

  return (
    <div className={cx("wrap")}>
      {isShowLoading && <Loading percent={percent} />}
      <Header />
      <Banner />
    </div>
  );
};

export default Web;
