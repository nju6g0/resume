import React from "react";
import { Link } from "react-router-dom";

import { AiFillPhone, AiTwotoneMail, AiFillEnvironment, AiOutlineGlobal } from "react-icons/ai";
import GoHome from "Component/GoHome";
import avatar from "image/avatar.jpg";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

function CV() {
  return (
    <div className={cx("wrap")}>
      <div className={cx("head")}>
        <div>
          <p>蘇怡姍 (Nicole Su)</p>
          <p>前端工程師</p>
        </div>
        <div className={cx("avatar")}>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className={cx("info")}>
        <div>
          <p>
            <AiFillPhone />
            <span>0987-064-169</span>
          </p>
          <p>
            <AiTwotoneMail />
            <span>nju6g0@gmail.com</span>
          </p>
          <p>
            <AiOutlineGlobal />
            <Link to="/">https://master.d91po6eifpl24.amplifyapp.com/home</Link>
          </p>
          <p>
            <AiFillEnvironment />
            <span>New Taipei City, Taiwan</span>
          </p>
        </div>
        <div>
          <p className={cx("title")}>SKILLS</p>
          <ul>
            <li>
              工具軟體
              <br />
              git, Visual Studio code
            </li>
            <li>
              網頁相關
              <ul>
                <li>html, css, scss</li>
                <li>bootstrap, Ant design</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Next.js</li>
                <li>GraphQL</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <p className={cx("title")}>訓練及證照</p>
          <ul>
            <li>六角學院 2024 Vue前端新手營挑戰者證書</li>
            <li>財團法人資訊工業策進會辦理之「前端工程師就業養成班」(受訓期間：2018年12月27日~2019年6月5日)</li>
            <li>日本語能力試驗N3合格(測驗日期2018年12月2日)</li>
            <li>財團法人中華民國對外貿易發展協會國際企業人材培訓中心第28期國際企業在職班(210小時)(受訓期間：2017年1月4日~2017年7月1日)</li>
          </ul>
        </div>
      </div>
      <div className={cx("content")}>
        <ul>
          <li>4 years + Frontend Developer</li>
          <li>熟悉 React.js 相關技術及應用</li>
          <li>與後端工程師討論 API 規格，構想錯誤情況處理</li>
          <li>與pm評估需求可行性</li>
          <li>獨立開發與團隊合作能力</li>
        </ul>
        <div className={cx("experience")}>
          <p className={cx("title")}>
            <span>工作經歷</span>
            <span />
          </p>
          <div>
            <p className={cx("jobTitle")}>前端工程師 • Bonio 幫你優</p>
            <p className={cx("period")}>十月 2021 - 6月 2024</p>
            <ul>
              負責社群共學平台前端相關的開發及維護：
              <li>以 React + styled-component 進行網頁前端功能開發及維護。</li>
              <li>以 React Native 進行 APP 功能開發及維護 。</li>
              <li>使用 Next.js + Ant Design 進行網頁後台開發及維護。</li>
              <li>與團隊共同評估需求可行性。</li>
              <li>與後端夥伴合作，制定、串接 API(GraphQL)。</li>
            </ul>
          </div>
          <div>
            <p className={cx("jobTitle")}>前端工程師 • 和泰聯網股份有限公司</p>
            <p className={cx("period")}>三月 2021 - 七月 2021</p>
            <p>以React規劃及開發企業簽單後台管理系統，並與後端工程師溝通合作串接API。</p>
          </div>
          <div>
            <p className={cx("jobTitle")}>前端工程師 • 緯創軟體股份有限公司</p>
            <p className={cx("period")}>三月 2020 - 三月 2021</p>
            <p>
              參與電競社群平台專案，使用 React 進行網頁維護及需求開發，與 UI/UX 設計師及後端工程師溝通合作，套用版面與實作並串接後端 API。
            </p>
          </div>
          <div>
            <p className={cx("jobTitle")}>前端工程師 • 精誠資訊股份有限公司 </p>
            <p className={cx("period")}>七月 2019 - 三月 2020</p>
            <p>以 angular 撰寫銀行端末系統前端頁面(系統翻新)。</p>
          </div>
        </div>
        <div className={cx("educational")}>
          <p className={cx("title")}>
            <span>學歷</span>
            <span />
          </p>
          <div>
            <p className={cx("jobTitle")}>國立臺北大學</p>
            <p className={cx("period")}>企業管理學系碩士 2009 - 2011</p>
          </div>
        </div>
      </div>
      <GoHome />
    </div>
  );
}

export default CV;
