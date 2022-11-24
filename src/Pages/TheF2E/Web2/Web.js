import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Loading from "./Loading";
import Header from "./Header";
import Banner from "./Banner";
import Questions from "./Questions";
import Topic from "./Topic";
import Stage from "./Stage";
import Sponsor from "./Sponsor";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Web = () => {
  const [percent, setPercent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let time = 0;
    function countDown() {
      if (time < 100) {
        time += 2;
        setPercent(time);
      } else {
        clearInterval(counter);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    }
    const counter = setInterval(countDown, 50);
  }, []);

  return (
    <div className={cx("wrap")}>
      <Helmet>
        <title>The F2E 活動網站設計</title>
        <meta name="description" content="The F2E 4th week 1" />
        <meta property="og:title" content="The F2E 活動網站設計" />
        <meta property="og:image" content="https://images.thef2e.com/2022/works/12061549261454740005_2022-11-07T02:25:15.840Z.png" />
      </Helmet>
      {isLoading ? (
        <Loading percent={percent} />
      ) : (
        <>
          <Header />
          <Banner />
          <Questions />
          <Topic />
          <Stage />
          <Sponsor />
        </>
      )}
    </div>
  );
};

export default Web;
