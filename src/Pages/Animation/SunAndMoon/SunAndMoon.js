import React, { useState } from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const SUN = "sun";
const MOON = "moon";

const SunAndMoon = () => {
  const [nowScene, setNowScene] = useState(MOON);

  const changeScene = (scene) => {
    setNowScene(scene);
  };

  return (
    <div className={cx("wrapper", nowScene)}>
      <div className={cx("starsContainer", nowScene === MOON && "show")}>
        {Array.from({ length: 30 }, (x) => x).map((star, idx) => (
          <div key={`star${idx}`} className={`star${idx + 1}`} />
        ))}
      </div>
      <div
        className={cx("moon", nowScene === MOON && "show")}
        onMouseUp={() => changeScene(SUN)}
      />
      <div
        className={cx("sun", nowScene === SUN && "show")}
        onMouseUp={() => changeScene(MOON)}
      />
    </div>
  );
};

export default SunAndMoon;
