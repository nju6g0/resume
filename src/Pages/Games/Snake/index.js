import React, { useState } from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const getRandomKey = () => Math.floor(Math.random() * 10000);

const Snake = () => {
  const [snake, setSnake] = useState([{ x: 3, y: 5 },{ x: 3, y: 4 },{ x: 3, y: 3 }]);
  const [fruit, setFruit] = useState({x: 9, y: 12})
  return (
    <div className={cx("container")}>
      <div>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((colX) => (
          <div key={getRandomKey()} className={cx("row")}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((colY) => {
                let type;
                if(snake.some(el => el.x === colX && el.y === colY)){
                    type = 'snake';
                } else if(colX === fruit.x && colY === fruit.y){
                    type = 'fruit';
                }
                return(
              <div key={getRandomKey()} className={cx("colum", type)} />
            )})}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snake;
