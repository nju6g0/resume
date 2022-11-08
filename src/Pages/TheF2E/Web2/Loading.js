import React from "react";

import img_caterpillar from "image/F2E_web/caterpillar.png";
import img_butterfly from "image/F2E_web/butterfly.png";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Loading = ({percent}) => {

  return (
    <div className={cx("loading")}>
      <div>
        <img
          className={cx("caterpillar")}
          src={img_caterpillar}
          alt="caterpillar"
          style={{ left: `${percent}%`, opacity: percent < 100 ? 1 : 0 }}
        />
        <img
          className={cx("butterfly")}
          src={img_butterfly}
          alt="butterfly"
          style={{ opacity: percent === 100 ? 1 : 0 }}
        />
        <div className={cx("progress")}>
          <div style={{ width: `${percent}%` }} />
        </div>
        <span>{percent === 100 ? "complete" : "loading..."}</span>
      </div>
    </div>
  );
};

export default Loading;
