import React, { useState, useEffect } from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const COLUM = 20;
const RIGHT = 'ArrowRight';
const LEFT = 'ArrowLeft';
const UP = 'ArrowUp';
const DOWN = 'ArrowDown';

const Snake = () => {
  const [snake, setSnake] = useState([{ x: 3, y: 5 },{ x: 3, y: 4 },{ x: 3, y: 3 }]);
  const [fruit, setFruit] = useState({x: 9, y: 12});
  const [direction, setDirection] = useState(RIGHT);

  useEffect(() => {
    const timer = setInterval(() => {
        let head = {...snake[0]};
        if(head.x >= COLUM || head.x <= 1 || head.y >= COLUM || head.y <= 1) return;
        if(direction === RIGHT){
            head.y += 1
        }
        if(direction === LEFT){
            head.y -= 1
        }
        if(direction === UP){
            head.x -= 1
        }
        if(direction === DOWN){
            head.x += 1
        }
        const snakeCopy = [head, ...snake];
        snakeCopy.pop();
        setSnake(snakeCopy)
    }, 200);

    return () => {
        clearInterval(timer);
    }
  }, [snake, direction])

  useEffect(() => {
    const handleChangeDirection = (e) => {
        setDirection(e.key)
    }
    window.addEventListener('keydown', handleChangeDirection);

    return () => {
        window.removeEventListener('keydown', handleChangeDirection);
    }
  },[])


  return (
    <div className={cx("container")}>
      <div>
        {Array.from({ length: COLUM }, (_, i) => i + 1).map((colX) => (
          <div key={`x_${colX}`} className={cx("row")}>
            {Array.from({ length: COLUM }, (_, i) => i + 1).map((colY) => {
                let type;
                if(snake.some(el => el.x === colX && el.y === colY)){
                    type = 'snake';
                } else if(colX === fruit.x && colY === fruit.y){
                    type = 'fruit';
                }
                return(
              <div key={`y_${colY}`} className={cx("colum", type)} />
            )})}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snake;
