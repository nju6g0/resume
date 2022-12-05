import React, { useState, useEffect } from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const MOVEMENT_X = 5;
const MOVEMENT_Y = 3;
const BALL_SIZE = 30;

const Monsters = () => {
  const [ballPosition, setBallPosition] = useState({
    isReverseX: false,
    isReverseY: false,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    let isReverseX = false;
    let isReverseY = false;
    const moveBall = () => {
      setBallPosition((prev) => {
        if (prev.x >= window.innerWidth - BALL_SIZE) {
          isReverseX = true;
        }
        if (prev.x < 0) {
          isReverseX = false;
        }
        if (prev.y >= window.innerHeight - BALL_SIZE) {
          isReverseY = true;
        }
        if (prev.y < 0) {
          isReverseY = false;
        }
        return {
          ...prev,
          x: isReverseX ? prev.x - MOVEMENT_X : prev.x + MOVEMENT_X,
          y: isReverseY ? prev.y - MOVEMENT_Y : prev.y + MOVEMENT_Y,
        };
      });
    };
    const ballAnimation = setInterval(moveBall, 30)

    return () => {
      clearInterval(ballAnimation);
    };
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div
        className={cx("ball")}
        style={{ top: `${ballPosition.y}px`, left: `${ballPosition.x}px` }}
      />
    </div>
  );
};

export default Monsters;
