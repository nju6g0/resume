import React, { useState, useContext, useEffect } from "react";
import { BiCheck } from "react-icons/bi";

import Dialog from "../Components/Dialog";
import Role, { ROLE_NAMES, ROLE_DIRECTIONS } from "../Components/Role";
import List, { LIST_THEME } from "../Components/List";
import { Context, STEPS_KEY } from "../Scrum2";

import classes from "../styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const OPENING = "opening";
const EXAMPLE = "example";
const END = "end";
const PARAGRAPH = {
  [OPENING]: (
    <p>
      嗚啊啊新來的 ， 你真的很幸運 ， 今天剛好是開發 B 組的 Retro ，
      你也來見識一下 ， 看看 Retro 都該做些什麼吧～～{" "}
    </p>
  ),
  [EXAMPLE]: (
    <p>
      我們會在會議裡請團隊成員提出哪些是做得好的地方 、 哪些可以繼續改善的地方
      ？ 並記錄再 Confluence 中 。 Retro 重點在於<span>「正面表述」</span>，
      你也思考看看 ， 哪一些是適合 Retro 的回饋呢 ？
    </p>
  ),
  [END]: (
    <p>
      太酷ㄌ吧 ， 根本天才 ， 畢業之後不要忘記我唷!
      <br />
      （點擊畫面任意處繼續）
    </p>
  ),
};

const Retro = () => {
  const context = useContext(Context);
  const [nowScene, setNowScene] = useState(OPENING);
  const [exampleStep, setExampleStep] = useState(0);

  const handleChangeScene = () => {
    switch (nowScene) {
      case OPENING:
        setNowScene(EXAMPLE);
        break;
      case EXAMPLE:
        if (exampleStep >= 3) {
          setNowScene(END);
          return;
        }
        window.scrollTo({ top: 400 });
        setExampleStep(exampleStep + 1);
        break;
      case END:
        context.goStep(STEPS_KEY.COMPLETE);
        break;
      default:
        break;
    }
  };

  const renderContent = () => {
    switch (nowScene) {
      case EXAMPLE:
        return (
          <div className={cx("example")}>
            <div className={cx("card")}>
              <p>Q1.做得好的地方?</p>
              <div>
                <div>
                  <div
                    className={cx("role", exampleStep >= 1 && ROLE_NAMES.MM)}
                  >
                    <Role name={ROLE_NAMES.MM} />
                  </div>
                  <List.Item theme={LIST_THEME.PURPLE}>
                    這次我幫了很多人救火耶～
                  </List.Item>
                </div>
                <div>
                  <div
                    className={cx("role", exampleStep >= 1 && ROLE_NAMES.PO)}
                  >
                    <Role name={ROLE_NAMES.PO} direction={ROLE_DIRECTIONS.UP} />
                  </div>
                  <List.Item>
                    大家在開發上都會互相 cover ， 讓任務都有準在時間內完成 。
                  </List.Item>
                  <div className={cx("checked", exampleStep >= 2 && "show")}>
                    <BiCheck />
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("card")}>
              <p>Q2.有哪些可以做得更好？</p>
              <div>
                <div>
                  <div
                    className={cx("role", exampleStep >= 1 && ROLE_NAMES.EE)}
                  >
                    <Role name={ROLE_NAMES.EE} direction={ROLE_DIRECTIONS.UP} />
                  </div>
                  <List.Item theme={LIST_THEME.YELLOW}>
                    可以記錄這次的開發時間 ， 讓預估團隊點數可以更精準 。
                  </List.Item>
                  <div className={cx("checked", exampleStep >= 3 && "show")}>
                    <BiCheck />
                  </div>
                </div>
                <div>
                  <div
                    className={cx("role", exampleStep >= 1 && ROLE_NAMES.GG)}
                  >
                    <Role name={ROLE_NAMES.GG} direction={ROLE_DIRECTIONS.UP} />
                  </div>
                  <List.Item theme={LIST_THEME.RED}>
                    開發時間預估不準確 ， 請後端下次改進 ， 避免 delay 到我 。
                  </List.Item>
                </div>
              </div>
            </div>
          </div>
        );
      case OPENING:
      case END:
      default:
        return null;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [nowScene]);

  return (
    <div className={cx("retro")} onClick={handleChangeScene}>
      <div className={cx("upper")}>
        <div>
          <Dialog
            speaker={ROLE_NAMES.GG}
            children={PARAGRAPH[nowScene]}
            isShowTriangle
          />
        </div>
        <Role name={ROLE_NAMES.GG} />
      </div>
      <div className={cx("content")}>{renderContent()}</div>
    </div>
  );
};
export default Retro;
