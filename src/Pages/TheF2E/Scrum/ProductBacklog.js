import React, { useState, useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { nanoid } from "nanoid";

import img_jira from "image/F2E_scrum/jira_logo.png";
import Button, { BUTTON_TYPES } from "./Button";
import Dialog from "./Dialog";
import Role, { ROLE_NAMES } from "./Role";
import { Context, STEPS_KEY } from "./Scrum2";
import List, { LIST_ITEM_TYPE } from "./List";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const INTRO = "intro";
const READY = "ready";
const DEMO = "demo";
const PRACTICAL = "practical";
const FINISHED = "finished";
const DIALOG_CONTENT = {
  [INTRO]: (
    <p>
      <span>\ 碰 / </span>我是短衝小精靈，開發 A 組的 PO 。
      <span>PO 也就是產品負責人（Product Owner）</span>
      ，產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序
      ， 對齊產品目標 。 最後排出產品待辦清單 （Product Backlog） 唷 ！
    </p>
  ),
  [READY]: (
    <p>
      剛好我最近手邊有一個 「 人才招募系統 」 的案子 ， 我才剛列出了{" "}
      <span>「 產品需求清單 」 </span>。 既然你都來了 ， 來試試看調整產品優先度
      ， 排出產品待辦清單吧 ！
    </p>
  ),
  [DEMO]: (
    <p>
      在這階段我們要把需求放進產品待辦清單 ， 並調整其優先順序 。對了 ！
      我們公司也推薦使用
      <img src={img_jira} alt="jira" />
      來做任務的管理呢 ！
    </p>
  ),
  [PRACTICAL]: (
    <>
      <p>換你來試試看吧 ！</p>
      <p>提示 ： 請把需求拖移至產品待辦清單 ， 並調整其優先順序 。</p>
    </>
  ),
  [FINISHED]: <p>哇喔完成惹 ， 尼太棒ㄌ！ 我們繼續吧 ！</p>,
};

const ProductBacklog = () => {
  const context = useContext(Context);
  const [nowScene, setNowScene] = useState(INTRO);
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [listItems, setListItems] = useState({
    left: [
      {
        title: "應徵者的線上履歷編輯器",
        id: nanoid()
      },
      {
        title: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
        id: nanoid(),
      },
    ],
    center: [],
    right: [
      {
        title: "會員系統（登入、註冊、權限管理）",
        id: nanoid(),
      },
      {
        title: "前台職缺列表、應徵",
        id: nanoid()
      },
    ],
  });

  const handleClickContinue = () => {
    if (nowScene === INTRO) {
      setNowScene(READY);
    }
    if (nowScene === DEMO) {
      if (!isDemoActive) {
        window.scrollTo({
          top: 500,
          behavior: "smooth",
        });
        setIsDemoActive(true);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setNowScene(PRACTICAL);
      }
    }
    if (nowScene === FINISHED) {
      context.goStep(STEPS_KEY.PLANNING);
    }
  };
  const handleClickReady = () => {
    setNowScene(DEMO);
  };
  const handleClickFinished = () => {
    setNowScene(FINISHED);
  };
  const handleDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    let draggedItems = { ...listItems };
    const [dragTarget] = draggedItems[source.droppableId].splice(
      source.index,
      1
    );
    draggedItems[destination.droppableId].splice(
      destination.index,
      0,
      dragTarget
    );

    setListItems(draggedItems);
  };

  const renderContent = () => {
    switch (nowScene) {
      case INTRO:
        return <Button type={BUTTON_TYPES.OUTLINE} text="點擊畫面任意處繼續" />;
      case READY:
        return <Button text="準備好了" onClick={handleClickReady} />;
      case DEMO:
        return (
          <div className={cx("demo")}>
            <div>
              <div className={cx("disabled")}>
                <List.Item>應徵者的線上履歷編輯器</List.Item>
              </div>
              <div className={cx("disabled")}>
                <List.Item>
                  後台職缺管理功能（資訊上架、下架、顯示應徵者資料）
                </List.Item>
              </div>
            </div>
            <List title="產品待辦清單" subtitle="Product Backlog">
              <List.Item type={LIST_ITEM_TYPE.DASHED}></List.Item>
              <List.Item type={LIST_ITEM_TYPE.DASHED}></List.Item>
              <List.Item type={LIST_ITEM_TYPE.DASHED}></List.Item>
              <List.Item type={LIST_ITEM_TYPE.DASHED}></List.Item>
            </List>
            <div>
              <div className={cx("disabled")}>
                <List.Item>會員系統（登入、註冊、權限管理）</List.Item>
              </div>
              <div className={cx(isDemoActive && "dragTarget")}>
                <List.Item>前台職缺列表、應徵</List.Item>
              </div>
            </div>
          </div>
        );
      case PRACTICAL:
        return (
          <>
            <div className={cx("practical")}>
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="left">
                  {(provided) => (
                    <div
                      className={cx("dropConatiner")}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {listItems.left.map((item, idx) => (
                        <div key={item.id}>
                          <Draggable
                            draggableId={item.id}
                            index={idx}
                            key={item.id}
                          >
                            {(provided, snapshot) => (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <List.Item>{item.title}</List.Item>
                              </div>
                            )}
                          </Draggable>
                        </div>
                      ))}
                    </div>
                  )}
                </Droppable>
                <List title="產品待辦清單" subtitle="Product Backlog">
                  <Droppable droppableId="center">
                    {(provided) => (
                      <div
                        className={cx("dropConatiner")}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {listItems.center.map((item, idx) => (
                          <div key={item.id}>
                            <Draggable
                              draggableId={item.id}
                              index={idx}
                              key={item.id}
                            >
                              {(provided, snapshot) => (
                                <div
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                >
                                  <List.Item>{item.title}</List.Item>
                                </div>
                              )}
                            </Draggable>
                          </div>
                        ))}
                      </div>
                    )}
                  </Droppable>
                </List>
                <Droppable droppableId="right">
                  {(provided) => (
                    <div
                      className={cx("dropConatiner")}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {listItems.right.map((item, idx) => (
                        <div key={item.id}>
                          <Draggable
                            draggableId={item.id}
                            index={idx}
                            key={item.id}
                          >
                            {(provided, snapshot) => (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <List.Item>{item.title}</List.Item>
                              </div>
                            )}
                          </Draggable>
                        </div>
                      ))}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
            <Button text="我完成了" disabled={listItems.center.length !== 4} onClick={handleClickFinished} />
          </>
        );
      case FINISHED:
        return <Button type={BUTTON_TYPES.OUTLINE} text="點擊畫面任意處繼續" />;
      default:
        return null;
    }
  };

  return (
    <div className={cx("productBacklog")} onClick={handleClickContinue}>
      <div>
        <Role name={ROLE_NAMES.PO} />
        <div>
          <Dialog
            speaker="PO"
            isShowTriangle={
              nowScene === INTRO || nowScene === DEMO || nowScene === FINISHED
            }
            children={DIALOG_CONTENT[nowScene]}
          />
        </div>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};
export default ProductBacklog;
