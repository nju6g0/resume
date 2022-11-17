import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { nanoid } from "nanoid";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const PRODUCT_BACKLOG = "productBacklog";
const SPRINT_TASK = "sprintTask";

const Scrum = () => {
  const [items, setItems] = useState({
    [PRODUCT_BACKLOG]: {
      list: [
        {
          title: "taskA",
          id: nanoid(),
        },
        {
          title: "taskB",
          id: nanoid(),
        },
        {
          title: "taskC",
          id: nanoid(),
        },
        {
          title: "taskD",
          id: nanoid(),
        },
        {
          title: "taskE",
          id: nanoid(),
        },
      ],
    },
    [SPRINT_TASK]: {
      list: [],
    },
  });

  const handleDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    let draggedItems = { ...items };
    const [dragTarget] = draggedItems[source.droppableId].list.splice(
      source.index,
      1
    );
    draggedItems[destination.droppableId].list.splice(
      destination.index,
      0,
      dragTarget
    );

    setItems(draggedItems);
  };

  return (
    <div className={cx("wrapper")}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={PRODUCT_BACKLOG}>
          {(provided) => (
            <div
              className={cx("dropContainer")}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items[PRODUCT_BACKLOG].list.map((el, idx) => (
                <div key={el.id}>
                  <Draggable draggableId={el.id} index={idx} key={el.id}>
                    {(provided, snapshot) => (
                      <div
                        className={cx("dragCard")}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {el.title}
                      </div>
                    )}
                  </Draggable>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId={SPRINT_TASK}>
          {(provided) => (
            <div
              className={cx("dropContainer")}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items[SPRINT_TASK].list.map((item, i) => (
                <div key={item.id}>
                  <Draggable draggableId={item.id} index={i} key={item.id}>
                    {(provided) => (
                      <div
                        className={cx("dragCard")}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {item.title}
                      </div>
                    )}
                  </Draggable>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
export default Scrum;
