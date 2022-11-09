import React, { useState } from "react";

import { BsFillForwardFill } from "react-icons/bs";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const datas = [
  {
    id: "week1",
    week: 1,
    subject: "The F2E 活動網站設計",
    hashTags: ["視差滾動", "版塊設計"],
    uiPeriod: "10/31(一) 12:00 PM ~ 11/7(一) 12:00 PM",
    fronendPeriod: "11/7(一) 12:00 PM ~ 11/14(一) 12:00 PM",
  },
  {
    id: "week2",
    week: 2,
    subject: "今晚，我想來點點簽",
    hashTags: ["Canvas", "凱鈿行動科技"],
    uiPeriod: "11/7(一) 12:00 PM ~ 11/14(一) 12:00 PM",
    fronendPeriod: "11/14(一) 12:00 PM ~ 11/21(一) 12:00 PM",
  },
  {
    id: "week3",
    week: 3,
    subject: "Scrum 新手村",
    hashTags: ["JS draggable", "鈦坦科技"],
    uiPeriod: "11/14(一) 12:00 PM ~ 11/21(一) 12:00 PM",
    fronendPeriod: "11/21(一) 12:00 PM ~ 11/28(一) 12:00 PM",
  },
];

const Stage = () => {
  const [nowIndex, setNowIndex] = useState(0);
  const [isFront, setIsFront] = useState(true);

  const handleClick = () => {
    const index = isFront ? nowIndex + 1 : nowIndex - 1;
    let direction = isFront && index < datas.length - 1 ? "front" : "back";
    if (index === 0) {
      direction = "front";
    }
    setNowIndex(index);
    setIsFront(direction === "front");
  };

  return (
    <div className={cx("stage")} onMouseDown={handleClick}>
      <div className={cx("week")}>
        <div
          style={{
            left: `calc(50% - 275px - ${(550 + 150) * nowIndex}px)`,
          }}
        >
          {datas.map((item) => (
            <p
              id={item.id}
              {...(nowIndex + 1 === item.week && { className: cx("active") })}
            >
              Week{item.week}
            </p>
          ))}
        </div>
      </div>
      <div className={cx("info")}>
        <div style={{ top: `-${nowIndex * 412}px` }}>
          {datas.map((item) => (
            <div
              id={`info_${item.id}`}
              className={cx("card", nowIndex + 1 === item.week && "active")}
            >
              <p>/ {item.subject} /</p>
              <div>
                {item.hashTags.map((tag, idx) => (
                  <span id={`tag_${idx}`}>#{tag}</span>
                ))}
              </div>
              <p>各組別投稿時間</p>
              <p>UI 組投稿區間：{item.uiPeriod}</p>
              <p>前端組投稿區間：{item.fronendPeriod}</p>
              <button type="button">
                更多關卡資訊 <BsFillForwardFill />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stage;
