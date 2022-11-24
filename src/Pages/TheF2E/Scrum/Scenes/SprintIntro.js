import React, { useEffect, useState, useContext } from "react";

import img_daily from "image/F2E_scrum/sprint_daily.png";
import img_review from "image/F2E_scrum/sprint_review.png";
import img_retro from "image/F2E_scrum/sprint_retro.png";
import Dialog from "../Components/Dialog";
import Role, { ROLE_NAMES } from "../Components/Role";
import List, { LIST_ITEM_TYPE, LIST_THEME } from "../Components/List";
import Button, { BUTTON_TYPES } from "../Components/Button";
import { Context, STEPS_KEY } from "../Scrum2";

import classes from "../styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const OPENING = "opening";
const INTRO = "intro";
const PROCESS = "process";
const END = "end";
const PARAGRAPH = {
  [OPENING]: (
    <p>
      等等等等等 ， 你都還不知道什麼是 Sprint 吧 ！ 讓我先為你介紹一下～
      <br />
      仔細聽好唷 ， 等等會考考你 ！
    </p>
  ),
  [INTRO]: (
    <p>
      Sprint 是一個短衝 ， 開發團隊會在這期間執行開發 。 在這段期間內 ，
      開發團隊舉辦<span>每日站立會議 (Daily Scrum)</span> ，
      追蹤成員間的工作狀況 ， 在 Sprint 的結束也會包含
      <span>短衝檢視會議 (Sprint Review)</span> 以及
      <span>短衝自省會議 (Sprint Retrospective)</span> 。
    </p>
  ),
  [PROCESS]: (
    <p>
      換你來試試看吧 ！ 在這經典的 Surum 流程圖中 ，
      這些流程分別代表哪一個會議呢 ？<br />
      (點擊畫面任意處繼續)
    </p>
  ),
  [END]: <p>哼哼沒想到你這麼快就學會惹 ， 快結束了加油加油 ！</p>,
};
const DAILY = "daily";
const REVIEW = "review";
const RETRO = "retro";
const INTRO_STEPS = {
  [DAILY]: {
    order: 1,
    imgSrc: img_daily,
    title: "每日站立會議",
    subtitle: "Daily Scrum",
    className: "daily",
    content: (
      <ul>
        每天都要進行的會議 ， 以15分鐘為限制
        <li>昨天為團隊的短衝目標 (Sprint Goal)做了那些進度</li>
        <li> 今天我會如何準備來幫助團隊達到短衝目標</li>
        <li>過程中有遇到什麼問題、難題</li>
        透過團隊分享 ， 追蹤大家的工作狀況。
      </ul>
    ),
  },
  [REVIEW]: {
    order: 2,
    imgSrc: img_review,
    title: "短衝檢視會議",
    subtitle: "Sprint Review",
    className: "review",
    content: (
      <ul>用來檢視該次短衝增量的成果 ， 以蒐集相關的回饋數據或意見 。</ul>
    ),
  },
  [RETRO]: {
    order: 3,
    imgSrc: img_retro,
    title: "短衝自省會議",
    subtitle: "Sprint Retrospective",
    className: "retro",
    content: (
      <ul>
        團隊在自省會議裡 , 會共同回顧該短衝歷程發生的事情
        <li>好的地方</li>
        <li>可以改進的地方</li>
        <li>如何維持我們已有的成功經驗</li>
        優化工作流程、讓團隊有變得更好的機會。
      </ul>
    ),
  },
};
const LIST_ITEMS = [
  {
    title: "產品待辦清單",
    subtitle: "Product Backlog",
  },
  {
    title: "短衝規劃會議",
    subtitle: "Sprint Planing",
  },
  {
    title: "短衝待辦清單",
    subtitle: "Sprint Backlog",
  },
];

const SprintIntro = () => {
  const context = useContext(Context);
  const [nowScene, setNowScene] = useState(OPENING);
  const [introStep, setIntroStep] = useState(0);
  const [processStep, setProcessStep] = useState(0);

  const handleChangeScene = () => {
    switch(nowScene){
      case OPENING:
        setNowScene(INTRO);
        break;
      case INTRO:
        if (introStep >= Object.keys(INTRO_STEPS).length) {
          setNowScene(PROCESS);
        } else {
          setIntroStep(introStep + 1);
        }
        break;
      case PROCESS:
        if (processStep >= 2) {
          setNowScene(END);
          return;
        }
        window.scrollTo({ top: 400 });
        setProcessStep(processStep + 1);
        break;
      case END:
        context.goStep(STEPS_KEY.RETRO);
        break;
      default:
        break;
    }
  };

  const renderContent = () => {
    switch (nowScene) {
      case INTRO:
        return (
          <div className={cx("intro")}>
            {Object.keys(INTRO_STEPS).map((key) => (
              <div
                key={key}
                {...(introStep >= INTRO_STEPS[key].order && {
                  className: cx("show"),
                })}
              >
                <img
                  src={INTRO_STEPS[key].imgSrc}
                  alt={INTRO_STEPS[key].subtitle}
                />
                <div className={cx("card", "yellow")}>
                  <p>{INTRO_STEPS[key].title}</p>
                  <span>{INTRO_STEPS[key].subtitle}</span>
                </div>
                {INTRO_STEPS[key].content}
              </div>
            ))}
          </div>
        );
      case PROCESS:
        return (
          <div className={cx("process")}>
            <div className={cx("listContainer")}>
              {LIST_ITEMS.map((item) => (
                <div
                  className={cx(
                    "card",
                    "green",
                    "left",
                    "hide",
                    processStep >= 1 && "jumping"
                  )}
                >
                  <p>{item.title}</p>
                  <span>{item.subtitle}</span>
                </div>
              ))}
            </div>
            <div
              className={cx(
                "card",
                "green",
                "up",
                "hide",
                processStep >= 1 && "jumping"
              )}
            >
              <p>短衝</p>
              <span>sprint</span>
            </div>
            <div className={cx("position_ab", "emptyCard", "review")}>
              <List.Item
                type={LIST_ITEM_TYPE.DASHED}
                theme={LIST_THEME.YELLOW}
              ></List.Item>
            </div>
            <div className={cx("position_ab", "emptyCard", "daily")}>
              <List.Item
                type={LIST_ITEM_TYPE.DASHED}
                theme={LIST_THEME.YELLOW}
              ></List.Item>
            </div>
            <div className={cx("position_ab", "emptyCard", "retro")}>
              <List.Item
                type={LIST_ITEM_TYPE.DASHED}
                theme={LIST_THEME.YELLOW}
              ></List.Item>
            </div>
            <div className={cx("listContainer")}>
              {Object.keys(INTRO_STEPS).map((key) => (
                <div
                  className={cx(
                    "card",
                    "yellow",
                    INTRO_STEPS[key].className,
                    processStep >= 2 && "position_ab"
                  )}
                >
                  <p>{INTRO_STEPS[key].title}</p>
                  <span>{INTRO_STEPS[key].subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case END:
        return (
          <div className={cx("buttonConatiner")}>
            <Button text="點擊畫面任意處繼續" type={BUTTON_TYPES.OUTLINE} />
          </div>
        );
      default:
      case OPENING:
        return null;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [nowScene]);

  return (
    <div className={cx("sprintIntro")} onClick={handleChangeScene}>
      <div className={cx("upper")}>
        <div>
          <Dialog
            speaker={ROLE_NAMES.EE}
            children={PARAGRAPH[nowScene]}
            isShowTriangle
          />
        </div>
        <Role name={ROLE_NAMES.EE} />
      </div>
      <div className={cx("content")}>{renderContent()}</div>
    </div>
  );
};
export default SprintIntro;
