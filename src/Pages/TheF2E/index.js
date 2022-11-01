import React, { useState, useEffect } from "react";
import qs from 'qs'
import { useParams, useLocation, useHistory, useQuery } from 'react-router-dom'

import GoHome from "Component/GoHome";
import Web from "./Web";
import Sign from "./Sign";
import Scrum from "./Scrum";
import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const WEB = "web";
const SIGN = "sign";
const SCRUM = "scurm";

const Page = () => {
  const location = useLocation()
  const history = useHistory()
  const params = useParams();
  const querys = qs.parse(location.search, { ignoreQueryPrefix: true })
  const [nowTab, setNowTab] = useState('');

  const toggleTab = tab => {
    history.push({
      pathname: location.pathname,
      search: qs.stringify({ tab })
    })
  }

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

  useEffect(()=>{
    setNowTab(querys.tab || WEB)
  },[querys])

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <header>
          <h3>The F2E 4th 互動式網頁設計</h3>
          <ul className={cx("tabs")}>
            <li onClick={()=>{toggleTab(WEB)}}>The F2E 活動網站設計</li>
            <li onClick={()=>{toggleTab(SIGN)}}>今晚，我想來點點簽</li>
            <li onClick={()=>{toggleTab(SCRUM)}}>Scrum 新手村</li>
          </ul>
        </header>
        <main>{renderTabContent()}</main>
      </div>
      <GoHome />
    </div>
  );
};

export default Page;
