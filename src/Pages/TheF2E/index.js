import React, { useState, useEffect } from "react";
import qs from "qs";
import { useLocation, useHistory } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import GoHome from "Component/GoHome";
import Web from "./Web2";
import Sign from "./Sign";
import Scrum from "./Scrum";
import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

export const WEB = "web";
export const SIGN = "sign";
export const SCRUM = "scrum";

const TABS = [
  {
    key: WEB,
    text: "The F2E 活動網站設計",
  },
  {
    key: SIGN,
    text: "今晚，我想來點點簽",
  },
  {
    key: SCRUM,
    text: "Scrum 新手村",
  },
];

const Page = () => {
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
      case SIGN:
        return <Sign />;
      case SCRUM:
        return <Scrum />;
      case WEB:
      default:
        return <Web />;
    }
  };

  useEffect(() => {
    if (!tab) {
      handleClickTab(SCRUM);
    } else {
      setNowTab(tab);
    }
  }, [tab]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("menu")}>
        <div className={cx("iconContainer")}>
          <AiOutlineMenu />
        </div>
        <h3>The F2E 4th 互動式網頁設計</h3>
        <ul>
          {TABS.map((tab) => (
            <li
              key={`tab_${tab.key}`}
              {...(nowTab === tab.key && { className: cx("active") })}
              onClick={() => {
                handleClickTab(tab.key);
              }}
            >
              {tab.text}
            </li>
          ))}
        </ul>
      </div>
      <main>{renderTabContent()}</main>
      <GoHome />
    </div>
  );
};

export default Page;
