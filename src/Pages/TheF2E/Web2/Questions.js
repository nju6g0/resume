import React, { useState, useEffect } from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const ITEMS = [
    {
        key:'question_block_A',
        text:'“滿足不了同事的許願？”'
    },
    {
        key:'question_block_B',
        text:'“羨慕別人的酷酷網頁動畫？”'
    },
    {
        key:'question_block_C',
        text:'“動畫技能樹太雜無從下手？”'
    },
]

const Questions = () => {
  const [nowIndex, setNowIndex] = useState(0);

  const handleClick = () => {
    setNowIndex(prev => prev>= ITEMS.length? prev: prev+1);
  }

  return (
    <div className={cx("questions")} onClick={handleClick}>
      <div className={cx("dots")}>
        {ITEMS.map((el, idx) => (
          <div key={el.key + idx} {...(nowIndex >= idx+1 && { className: cx("active") })} />
        ))}
      </div>
      <div className={cx("cards")}>
      {ITEMS.map((item,idx) => (
          <div key={item.key} {...(nowIndex >= idx+1 && { className: cx("active") })}>{item.text}</div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
