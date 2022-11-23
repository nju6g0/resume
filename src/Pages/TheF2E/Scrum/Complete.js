import React, { useContext } from "react";

import { Context, STEPS_KEY } from "./Scrum2";
import Role, { ROLE_NAMES, ROLE_DIRECTIONS } from "./Role";
import img_logo from "image/F2E_scrum/logo_txt.png";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Complete = () => {
  const context = useContext(Context);

  const handleReStart = () => {
    context.goStep(STEPS_KEY.ENTRY);
  };

  return (
    <div className={cx("complete")}>
      <img src={img_logo} alt="logo" />
      <p>恭喜你通過</p>
      <h3>《 敏捷任務 - 最初の試煉 》</h3>
      <span onClick={handleReStart}>再玩一次</span>
      <div className={cx("roles")}>
        <div>
          <p>窩的冰淇淋ㄋ？</p>
          <Role name={ROLE_NAMES.GG} direction={ROLE_DIRECTIONS.UP} />
        </div>
        <div>
          <p>嗚嗚我會想尼QQ</p>
          <Role name={ROLE_NAMES.EE} direction={ROLE_DIRECTIONS.UP} />
        </div>
        <div>
          <p>不愧似窩ㄉ學生</p>
          <Role name={ROLE_NAMES.MM} />
        </div>
        <div>
          <p>哇喔太厲害ㄌㄅ</p>
          <Role name={ROLE_NAMES.PO} direction={ROLE_DIRECTIONS.UP} />
        </div>
      </div>
      <div className={cx("star", "star1")}/>
      <div className={cx("star", "star2")}/>
      <div className={cx("star", "star3")}/>
      <div className={cx("star", "star4")}/>
      <div className={cx("star", "star5")}/>
      <div className={cx("star", "star6")}/>
      <div className={cx("star", "star7")}/>
      <div className={cx("star", "star8")}/>
      <div className={cx("star", "star9")}/>
      <div className={cx("star", "star10")}/>
    </div>
  );
};
export default Complete;
