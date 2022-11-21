import React, { useState } from "react";

import img_jira from "image/F2E_scrum/jira_logo.png";
import Button, { BUTTON_TYPES } from "./Button";
import Dialog from "./Dialog";
import Role, { ROLE_NAMES } from './Role';

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const INTRO = 'intro';
const READY = 'ready';
const DEMO = 'demo';
const DIALOG_CONTENT = {
  [INTRO]: (
    <p>
      <span>\ 碰 / </span>我是短衝小精靈，開發 A 組的 PO 。
      <span>PO 也就是產品負責人（Product Owner）</span>
      ，產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序 ， 對齊產品目標 。 最後排出產品待辦清單 （Product Backlog） 唷 ！
    </p>
  ),
  [READY]: (
    <p>
      剛好我最近手邊有一個 「 人才招募系統 」 的案子 ， 我才剛列出了 <span>「 產品需求清單 」 </span>。 既然你都來了 ， 來試試看調整產品優先度 ， 排出產品待辦清單吧 ！
    </p>
  ),
  [DEMO]: (
    <p>
      在這階段我們要把需求放進產品待辦清單 ， 並調整其優先順序 。對了 ！ 我們公司也推薦使用<img src={img_jira} alt='jira' />來做任務的管理呢 ！
    </p>
  ),
};


const ProductBacklog = () => {
  const [nowScene, setNowScene] = useState(INTRO);

  const handleClickContinue = () => {
    if(nowScene !== INTRO) return;
    setNowScene(READY);
  }
  const handleClickReady = () => {
    setNowScene(DEMO); 
  }

  const renderContent = () => {
    switch(nowScene){
      case INTRO:
        return <Button type={BUTTON_TYPES.OUTLINE} text="點擊畫面任意處繼續" />;
      case READY:
        return <Button text="準備好了" onClick={handleClickReady} />;
      case DEMO:
        return;
      default:
        return null;
    }
  }

  return (
    <div className={cx("productBacklog")} onClick={handleClickContinue}>
      <div>
        <Role name={ROLE_NAMES.PO} />
        <div>
          <Dialog
            speaker="PO"
            isShowTriangle={nowScene === INTRO || nowScene === DEMO}
            children={DIALOG_CONTENT[nowScene]}
          />
        </div>
      </div>
      <div>
         {renderContent()}
      </div>
    </div>
  );
};
export default ProductBacklog;
