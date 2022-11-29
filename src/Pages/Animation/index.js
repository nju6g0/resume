import React, { useState, useEffect, useRef } from "react";

import GoHome from "Component/GoHome";
import SunAndMoon from "./SunAndMoon";
import Monsters from "./Monsters";
import Loading from "./Loading";
import Menu from "./Menu";

const CONTENT_LIST = [
  {
    key: "sunandmoon",
    label: "日夜轉換",
    component: <SunAndMoon />,
  },
  {
    key: "monsters",
    label: "小怪獸們",
    component: <Monsters />,
  },
];

const MainPage = () => {
  const { innerHeight } = window;
  const [nowIndex, setNowIndex] = useState(0);

  const scrollScene = (top) => {
    window.scrollTo(0, top);
  };

  const handleClickMenu = (index) => {
    scrollScene(index * innerHeight);
    setNowIndex(index);
  };

  useEffect(() => {
    function handleScroll() {
      const nowArea = Math.floor((window.scrollY * 1.5) / innerHeight);
      if (nowArea !== nowIndex) {
        setNowIndex(nowArea);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nowIndex]);

  useEffect(() => {
    scrollScene(0);
  }, []);

  return (
    <>
      {CONTENT_LIST.map((content) => content.component)}
      <Menu
        index={nowIndex}
        list={CONTENT_LIST.map(({ key, label }) => ({ key, label }))}
        onClick={handleClickMenu}
      />
      <GoHome />
      <Loading />
    </>
  );
};

export default MainPage;
