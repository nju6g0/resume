import React, { useRef } from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const SunAndMoon = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className={cx("wrapper")}>
      <div className={cx("moon")} />
      <div className={cx("sun")} />
      <div className={cx("starsContainer")}>
        {Array.from({ length: 30 }, (x) => x).map((star, idx) => (
          <div key={`star${idx}`} className={`star${idx + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default SunAndMoon;
