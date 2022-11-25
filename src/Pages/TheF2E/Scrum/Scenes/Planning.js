import React, { useState, useContext, useRef } from "react";

import img_jira from "image/F2E_scrum/jira_logo.png";
import img_sprint from "image/F2E_scrum/sprint.png";
import img_planning_team from "image/F2E_scrum/planning_team.png";
import img_sprint_plan from "image/F2E_scrum/sprintPlan.png";
import img_clock from "image/F2E_scrum/clock.png";
import img_book from "image/F2E_scrum/book.png";
import Dialog from "../Components/Dialog";
import Role, { ROLE_NAMES } from "../Components/Role";
import Button from "../Components/Button";
import { Context, STEPS_KEY } from "../Scrum2";

import classes from "../styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const STORY_POINTS = [1, 2, 3, 5, 8, 13, 21];
const LARGEST_POINT = 13;
const OPENING = "opening";
const INTRO_SM = "introScrumMaster";
const INTRO_RD = "introDeveloper";
const STORY_POINT = "storyPoint";
const FIBONACCI = "Fibonacci series";
const ENDING = "ending";
const ENDING2 = "ending2";

const SCENES = {
  [OPENING]: {
    speaker: ROLE_NAMES.PO,
    header: {
      roles: [ROLE_NAMES.PO],
      paragraph: (
        <p>
          產品待辦清單好了之後 ， 我們來召集 ScrumMaster 和開發團隊共同召開
          <span>短衝規劃會議（Sprint Planning）</span>
          。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint
          Backlog，並由開發團隊在接下來的產品開發週期裡執行。
        </p>
      ),
    },
    body: {
      render: (
        <div className={cx("opening")}>
          <div>
            <img src={img_sprint} alt="sprint" />
          </div>
        </div>
      ),
    },
    footer: {
      roles: [ROLE_NAMES.MM],
      paragraph: null,
    },
  },
  [INTRO_SM]: {
    speaker: ROLE_NAMES.MM,
    header: {
      roles: [ROLE_NAMES.PO],
      paragraph: null,
    },
    body: {
      render: (
        <div className={cx("introSM")}>
          <div>
            <img src={img_planning_team} alt="team" />
          </div>
        </div>
      ),
    },
    footer: {
      roles: [ROLE_NAMES.MM],
      paragraph: (
        <p>
          哦哦 ， 你是新來的前端吧 ！ 我是這次的<span> ScrumMaster MM</span> ，
          我的工作主要是促成開發團隊成員協作 、 引導團隊進行自省會議 ，
          提升團隊成員對 Scrum 瞭解 。
        </p>
      ),
    },
  },
  [INTRO_RD]: {
    speaker: ROLE_NAMES.MM,
    header: {
      roles: [ROLE_NAMES.EE, ROLE_NAMES.GG],
      paragraph: null,
    },
    body: {
      render: (
        <div className={cx("introRD")}>
          <div>
            <img src={img_sprint_plan} alt="sprint plan" />
          </div>
        </div>
      ),
    },
    footer: {
      roles: [ROLE_NAMES.MM],
      paragraph: (
        <p>
          這兩位是 EE 和 GG ， 是我們開發團隊的成員唷～ 我們團隊
          <span>一次 Sprint 週期是兩週</span>的時間 ， 依照我的觀察 ，
          目前團隊可以負擔的點數 (Story Point) 大約是 <span>20 點</span>
          左右。
        </p>
      ),
    },
  },
  [STORY_POINT]: {
    speaker: ROLE_NAMES.EE,
    header: {
      roles: [ROLE_NAMES.EE, ROLE_NAMES.GG],
      paragraph: (
        <p>
          欸新來的 ， 你應該不知道點數是什麼意思吧ㄏㄏ ， 我來跟你介紹一下吧～{" "}
          <span>Story Point </span>目的是為了
          <span>衡量速度</span> ， 是用大概花費的時間預估出的相對點數哦 。
        </p>
      ),
    },
    body: {
      render: (
        <div className={cx("storyPoint")}>
          <div>
            <img src={img_clock} alt="clock" />
          </div>
          {Array.from({ length: 7 }, (x, i) => i).map((item) => (
            <div key={`story_${item}`}>
              <img src={img_book} alt="book" />
            </div>
          ))}
        </div>
      ),
    },
    footer: null,
  },
  [FIBONACCI]: {
    speaker: ROLE_NAMES.EE,
    header: {
      roles: [ROLE_NAMES.EE, ROLE_NAMES.GG],
      paragraph: (
        <p>
          以 <span>「 費氏數列 」 的 1 、2 、3 、5 、8 、13 、21</span>{" "}
          來估算各項 Story 的分數 。 Story Point 越小 ， 表示這個 Story
          花費時間越少 ； 越大 ， 花費時間則越多 。 如果出現了一個 21 分 ，
          可能表示這個 Story 太龐大 ， 需要再拆分細項執行唷 ！
        </p>
      ),
    },
    body: {
      render: (
        <div className={cx("fibonacci")}>
          {STORY_POINTS.map((item) => (
            <div
              key={`story_${item}`}
              {...(item === LARGEST_POINT && { className: cx("warning") })}
              {...(item > LARGEST_POINT && { className: cx("error") })}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      ),
    },
    footer: null,
  },
  [ENDING]: {
    speaker: ROLE_NAMES.GG,
    header: {
      roles: [ROLE_NAMES.GG, ROLE_NAMES.EE],
      paragraph: (
        <p>
          沒錯，如 EE 說的，我這邊已經把剛剛討論好的點數標上去囉～
          你來練習把任務排到短衝待辦清單吧 ！
        </p>
      ),
    },
    body: {
      render: <div></div>,
    },
    footer: null,
  },
  [ENDING2]: {
    speaker: ROLE_NAMES.EE,
    header: {
      roles: [ROLE_NAMES.EE, ROLE_NAMES.GG],
      paragraph: (
        <p>
          By the way , 我們平常管理任務是使用
          <img src={img_jira} alt="jira" />
          這套軟體 ， 你有時間記得先去註冊和熟悉唷 !
        </p>
      ),
    },
    body: {
      render: (
        <div className={cx("ending")}>
          <Button text="練習去囉" />
        </div>
      ),
    },
    footer: null,
  },
};
const SCENES_ORDER = [
  OPENING,
  INTRO_SM,
  INTRO_RD,
  STORY_POINT,
  FIBONACCI,
  ENDING,
  ENDING2,
];
const defaultScene = SCENES_ORDER[0];

const Planning = () => {
  const footerRef = useRef(null);
  const context = useContext(Context);
  const [nowScene, setNowScene] = useState(defaultScene);

  const { header, body, footer } = SCENES[nowScene];
  const headerReverse = nowScene === OPENING || nowScene === INTRO_SM;

  const handleChangeScene = () => {
    if (nowScene === SCENES_ORDER[SCENES_ORDER.length - 1]) {
      context.goStep(STEPS_KEY.SPRINT_TASK);
      return;
    };

    if([INTRO_RD, STORY_POINT, FIBONACCI, ENDING].includes(nowScene)){
      window.scrollTo({top: 0});
    }
    if([OPENING].includes(nowScene)){
      window.scrollTo({top: footerRef.current.offsetTop});
    }

    const index = SCENES_ORDER.findIndex((scene) => scene === nowScene);
    setNowScene(SCENES_ORDER[index + 1]);
  };

  return (
    <div className={cx("planning")} onClick={handleChangeScene}>
      {header && (
        <div className={cx("header", headerReverse && "reverse")}>
          <div className={cx("paragraph")}>
            {header.paragraph && (
              <Dialog
                speaker={SCENES[nowScene].speaker}
                isShowTriangle
                children={header.paragraph}
              />
            )}
          </div>
          {header.roles.map((role) => (
            <div key={role} className={cx("role")}>
              <Role name={role} />
            </div>
          ))}
        </div>
      )}
      <div className={cx("body")}>{body.render}</div>
      {footer && (
        <div ref={footerRef} className={cx("footer")}>
          {footer.roles.map((role) => (
            <div key={role} className={cx("role")}>
              <Role name={role} />
            </div>
          ))}
          <div className={cx("paragraph")}>
            {footer.paragraph && (
              <Dialog
                speaker={SCENES[nowScene].speaker}
                theme={"purple"}
                isShowTriangle
                children={footer.paragraph}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Planning;
