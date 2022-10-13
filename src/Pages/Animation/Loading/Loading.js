import React, { useState, useEffect } from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Loading = () => {
  const [percent, setPercent] = useState(0);

    useEffect(() => {
      let time = 0;
      function countDown() {
        if (time < 100) {
          time += 2;
          setPercent(time);
        } else {
          clearInterval(counter);
        }
      }
      const counter = setInterval(countDown, 50);
    }, []);

  return (
    <div className={cx("wrapper", percent >= 100 && "animation")}>
      <div className={cx("monster")}>
        <div className={cx("eye")}></div>
        <div className={cx("eye")}></div>
      </div>
      <div>
        <div className={cx("progressBar")}>
          <div
            className={cx("progressInner")}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <span style={{left: `${percent}%`}}>{percent}%</span>
      </div>
    </div>
  );
};

export default Loading;
