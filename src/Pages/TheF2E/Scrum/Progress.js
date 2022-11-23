import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Context, STEPS_KEY } from "./Scrum2";
import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Progress = ({ nowStep }) => {
  const context = useContext(Context);
  const [percent, setPercent] = useState(0);

  const handleClickStep = (key) => {
    context.goStep(STEPS_KEY[key]);
  };

  useEffect(() => {
    setPercent(
      (Object.keys(STEPS_KEY).findIndex((key) => STEPS_KEY[key] === nowStep) /
        6) *
        100
    );
  }, [nowStep]);

  return (
    <div className={cx("progress")}>
      <div>
        {Object.keys(STEPS_KEY).map((key, idx) => (
          <div
            key={key}
            className={cx(
              "dot",
              percent / 10 > idx + 1 && "goaled",
              idx + 1 === Object.keys(STEPS_KEY).length && "lastest"
            )}
            onClick={() => {
              handleClickStep(key);
            }}
          >
            <span>{STEPS_KEY[key]}</span>
          </div>
        ))}
      </div>
      <span className={cx("rate")} style={{ width: `${percent}%` }} />
    </div>
  );
};

Progress.propTypes = {
nowStep: PropTypes.string.isRequired
};

export default Progress;
