import React, { useState, useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { nanoid } from "nanoid";

import Dialog from "./Dialog";
import Role, { ROLE_NAMES } from "./Role";
import Button, { BUTTON_TYPES } from "./Button";
import List, { LIST_THEME } from "./List";
import { Context, STEPS_KEY } from "./Scrum2";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const MAX_POINTS = 20;
const PRODUCT_BACKLOG = "productBacklog";
const SPRINT_BACKLOG = "sprintBacklog";
const LIST_ITEMS = [
  {
    id: nanoid(),
    title: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
    point: 8,
  },
  {
    id: nanoid(),
    title: "應徵者的線上履歷編輯器",
    point: 5,
  },
  {
    id: nanoid(),
    title: "會員系統（登入、註冊、權限管理）",
    point: 13,
  },
  {
    id: nanoid(),
    title: "前台職缺列表、應徵",
    point: 8,
  },
];

const DRAG = "drag";
const COMPLETE = "complete";
const PARAGRAPH = {
  [DRAG]: (
    <p>
      換你來試試看吧 ！ 把<span> 「 產品待辦清單 」</span> 的項目拖進
      <span>「 開發Ａ組的短衝待辦清單 」</span> 裡吧 ！ 提示：置入兩項以上的
      Story ， 點數總和不能超過團隊負擔上限 20 點唷！
    </p>
  ),
  [COMPLETE]: <p>噢嗚嗚 ， 太厲害ㄌ ！ 又完成了一關 ！ 還有下一關等著你 ！</p>,
};

const SprintTask = () => {
  const context = useContext(Context);

  const [nowScene, setNowScene] = useState(DRAG);
  const [listItems, setListItems] = useState({
    [PRODUCT_BACKLOG]: {
      list: [...LIST_ITEMS],
    },
    [SPRINT_BACKLOG]: { list: [] },
  });

  const handleDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    let draggedItems = { ...listItems };
    const [dragTarget] = draggedItems[source.droppableId].list.splice(
      source.index,
      1
    );
    draggedItems[destination.droppableId].list.splice(
      destination.index,
      0,
      dragTarget
    );

    setListItems(draggedItems);
  };

  const handleClickComplete = () => {
    window.scrollTo({ top: 0 });
    setNowScene(COMPLETE);
  };
  const goNextStep = () => {
    if (nowScene === COMPLETE) {
      window.scrollTo({ top: 0 });
      context.goStep(STEPS_KEY.SPRINT_INTRO);
    }
  };

  const totalPoint = listItems[SPRINT_BACKLOG].list.reduce(
    (acc, current) => acc + current.point,
    0
  );

  return (
    <div className={cx("sprintTask")} onClick={goNextStep}>
      <div className={cx("upper")}>
        <div>
          <Dialog
            speaker={ROLE_NAMES.GG}
            children={PARAGRAPH[nowScene]}
            isShowTriangle={nowScene === COMPLETE}
          />
        </div>
        <Role name={ROLE_NAMES.GG} />
      </div>
      <div className={cx("content")}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <List title="產品待辦清單" subtitle="Product Backlog">
            <Droppable droppableId={PRODUCT_BACKLOG}>
              {(provided) => (
                <div
                  className={cx("listItems")}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {listItems[PRODUCT_BACKLOG].list.map((item, idx) => (
                    <Draggable draggableId={item.id} index={idx} key={item.id}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <List.Item>
                            <div className={cx("item")}>
                              <span>{item.point}</span>
                              <p>{item.title}</p>
                            </div>
                          </List.Item>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          </List>
          <List
            title="開發Ａ組的短衝待辦清單"
            subtitle="Sprint Backlog"
            theme={LIST_THEME.YELLOW}
          >
            <Droppable droppableId={SPRINT_BACKLOG}>
              {(provided) => (
                <div
                  className={cx("listItems", "sprintBacklog")}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {listItems[SPRINT_BACKLOG].list.map((item, idx) => (
                    <Draggable draggableId={item.id} index={idx} key={item.id}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <List.Item>
                            <div className={cx("item")}>
                              <span>{item.point}</span>
                              <p>{item.title}</p>
                            </div>
                          </List.Item>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          </List>
        </DragDropContext>
        <div className={cx("complete", nowScene === COMPLETE && "show")}>
          <Button text="點擊畫面任意處繼續" type={BUTTON_TYPES.OUTLINE} />
        </div>
      </div>
      {nowScene === DRAG && (
        <div className={cx("buttonContainer")}>
          <Button
            text="開始sprint"
            disabled={
              totalPoint > MAX_POINTS ||
              listItems[SPRINT_BACKLOG].list.length < 2
            }
            onClick={handleClickComplete}
          />
        </div>
      )}
    </div>
  );
};
export default SprintTask;
