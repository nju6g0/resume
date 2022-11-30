import React, { useState } from "react";
import { RiSeedlingFill } from "react-icons/ri";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const SUN = "sun";
const MOON = "moon";
const BASE_SIZE = 40;
const MAX_COUNT = 10;
const GROW_RANGE = 20;
const MIN_GROW_STEP = 2;

const SunAndMoon = () => {
  const [nowScene, setNowScene] = useState(MOON);
  const [counter, setCounter] = useState(0);

  const toggleScene = () => {
    setNowScene(nowScene === MOON ? SUN : MOON);
    setCounter(counter >= MAX_COUNT ? MAX_COUNT : counter + 1);
  };
  const getSize = (scale) => {
    let range = counter - MIN_GROW_STEP - scale;
    if ((counter % 2 === 0) & (counter !== 0)) {
      range -= 1;
    }
    const size = range >= 0 ? range : 0;
    return BASE_SIZE + size * GROW_RANGE;
  };

  return (
    <div className={cx("wrapper", nowScene)} onMouseUp={toggleScene}>
      {/* <h2 style={{ color: "red", position: "absolute", top: 0, left: 0 }}>
        {counter}/{getSize(0)}/{getSize(2)}/{getSize(4)}
      </h2> */}
      <div className={cx("starsContainer", nowScene === MOON && "show")}>
        {Array.from({ length: 30 }, (x) => x).map((star, idx) => (
          <div key={`star${idx}`} className={`star${idx + 1}`} />
        ))}
      </div>
      <div className={cx("moon", nowScene === MOON && "show")} />
      <div className={cx("sun", nowScene === SUN && "show")} />
      <div
        className={cx("seed", nowScene === MOON ? "night" : "day")}
        style={{
          width: `${getSize(0)}px`,
          height: `${getSize(0)}px`,
        }}
      >
        <RiSeedlingFill />
      </div>
      <div
        className={cx("seed", nowScene === MOON ? "night" : "day")}
        style={{
          width: `${getSize(MIN_GROW_STEP)}px`,
          height: `${getSize(MIN_GROW_STEP)}px`,
          bottom: `${counter >= MIN_GROW_STEP+1 ? (getSize(0) / 7) * 4 : 0}px`,
          opacity: `${counter >= MIN_GROW_STEP+1 ? 1 : 0}`,
        }}
      >
        <RiSeedlingFill />
      </div>
      <div
        className={cx("seed", nowScene === MOON ? "night" : "day")}
        style={{
          width: `${getSize(Math.pow(MIN_GROW_STEP, 2))}px`,
          height: `${getSize(Math.pow(MIN_GROW_STEP, 2))}px`,
          bottom: `${
            counter >= Math.pow(MIN_GROW_STEP, 2) + 1
              ? (getSize(0) + getSize(MIN_GROW_STEP)) / 7 * 4
              : getSize(0) / 7 * 4
          }px`,
          opacity: `${counter >= 5 ? 1 : 0}`,
        }}
      >
        <RiSeedlingFill />
      </div>
    </div>
  );
};

export default SunAndMoon;
