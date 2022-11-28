import React, { useState, useContext } from "react";

import { Context, STEPS_KEY } from "../Scrum2";
import {
  img_logo,
  img_leaf_top,
  img_leaf_right,
  img_leaf_bottom,
  img_leaf_left,
} from "../Assets";
import Button from "../Components/Button";
import Dialog from "../Components/Dialog";

import classes from "../styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Entry = () => {
  const context = useContext(Context);
  const [isDefaultScene, setIsDefaultScene] = useState(true);

  const changeScene = () => {
    setIsDefaultScene(false);
  };
  const goNextStep = () => {
    context.goStep(STEPS_KEY.PRODUCT_BACKLOG);
  };

  return (
    <div className={cx("entry")}>
      <img
        src={img_leaf_top}
        alt=""
        {...(!isDefaultScene && { className: cx("back") })}
      />
      <img
        src={img_leaf_right}
        alt=""
        {...(!isDefaultScene && { className: cx("back") })}
      />
      <img
        src={img_leaf_bottom}
        alt=""
        {...(!isDefaultScene && { className: cx("back") })}
      />
      <img
        src={img_leaf_left}
        alt=""
        {...(!isDefaultScene && { className: cx("back") })}
      />
      {isDefaultScene ? (
        <>
          <div className={cx("info")}>
            <div className={cx("logoBox")}>
              <img src={img_logo} alt="logo" />
            </div>
            <p>深入敏捷の村一探究竟</p>
            <div className={cx("buttonContainer")}>
              <Button text="進入村莊" type="secondary" onClick={changeScene} />
            </div>
          </div>
          <div className={cx("star", "star1", "purple")} />
          <div className={cx("star", "star2", "red")} />
          <div className={cx("star", "star3", "yellow")} />
          <div className={cx("star", "star4", "purple")} />
          <div className={cx("star", "star5", "red")} />
          <div className={cx("star", "star6", "yellow")} />
        </>
      ) : (
        <>
          <div className={cx("info")}>
            <Dialog
              speaker="（謎之音）"
              children={
                <>
                  <p className={cx("greeting")}>
                    呦呼，歡迎進入 <span>「SCRUM 新手村」</span>
                    ，在正式加入專案開發之前 ，需要請你先了解 Scrum
                    的流程與精神！ 請接受挑戰任務，成功通過 Scrum
                    新手村的挑戰任務吧～
                  </p>
                  <p className={cx("greeting")}>
                    請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～
                  </p>
                </>
              }
            />
            <Button text="接受挑戰" type="secondary" onClick={goNextStep} />
          </div>
        </>
      )}
    </div>
  );
};
export default Entry;
