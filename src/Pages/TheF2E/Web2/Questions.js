import React, { useState, useEffect, useRef } from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const ITEMS = [
  {
    key: "question_block_A",
    text: "“滿足不了同事的許願？”",
  },
  {
    key: "question_block_B",
    text: "“羨慕別人的酷酷網頁動畫？”",
  },
  {
    key: "question_block_C",
    text: "“動畫技能樹太雜無從下手？”",
  },
];
const SCROLL_STEP = 200;

const Questions = () => {
  const ref = useRef(null);
  const [nowIndex, setNowIndex] = useState(0);

  useEffect(() => {
    let preScroll = window.scrollY;
    const handleScroll = () => {
      const offsetTop = ref.current?.offsetTop - SCROLL_STEP;
      const isReach = window.scrollY >= offsetTop;
      const scrollRange = window.scrollY - preScroll;
      if (scrollRange > 0) {
        if (nowIndex < ITEMS.length && isReach) {
          const index = Math.ceil((window.scrollY - offsetTop) / SCROLL_STEP);
          setNowIndex(index);
        }
      } else {
        setNowIndex((prev) => (prev >= 0 ? prev - 1 : 0));
      }
      preScroll = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nowIndex]);

  return (
    <div ref={ref} className={cx("questions")}>
      <div className={cx("dots")}>
        {ITEMS.map((el, idx) => (
          <div
            key={el.key + idx}
            {...(nowIndex >= idx + 1 && { className: cx("active") })}
          />
        ))}
      </div>
      <div className={cx("cards")}>
        {ITEMS.map((item, idx) => (
          <div
            key={item.key}
            {...(nowIndex >= idx + 1 && { className: cx("active") })}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
