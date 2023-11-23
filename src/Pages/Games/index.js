import React, { useState, useEffect } from "react";
import qs from "qs";
import { useLocation, useHistory } from "react-router-dom";

import GoHome from "Component/GoHome";
import CardMemory from "./CardMemory";
import Snake from "./Snake";
import Minesweeper from "./Minesweeper";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const CARD_MEMORY = "cardMemory";
const SNAKE = "snake";
const MINESWEEPER = "minesweeper";

const TABS = [
  {
    key: CARD_MEMORY,
    title: "翻牌記憶遊戲",
  },
  {
    key: SNAKE,
    title: "貪吃蛇遊戲",
  },
  {
    key: MINESWEEPER,
    title: "踩地雷遊戲",
  },
];

const Games = () => {
  const location = useLocation();
  const history = useHistory();
  const querys = qs.parse(location.search, { ignoreQueryPrefix: true });
  const { tab } = querys;
  const [nowTab, setNowTab] = useState("");
  const handleClickTab = (tab) => {
    if (tab === nowTab) return;

    history.push({
      pathname: location.pathname,
      search: qs.stringify({ tab }),
    });
  };
  const renderTabContent = () => {
    switch (nowTab) {
      case CARD_MEMORY:
        return <CardMemory />;
      case SNAKE:
        return <Snake />;
      case MINESWEEPER:
        return <Minesweeper />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (tab) {
      setNowTab(tab);
    }
  }, [tab]);

  return (
    <div className={cx("wrap")}>
      <ul>
        {TABS.map(({ key, title }) => (
          <li
            key={key}
            onClick={() => {
              handleClickTab(key);
            }}
          >
            {title}
          </li>
        ))}
      </ul>
      {renderTabContent()}
      <GoHome />
    </div>
  );
};

export default Games;
