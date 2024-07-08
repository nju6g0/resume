import React, { useState, useEffect } from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const COLUM = 20;
const STEP = 10;
const INITIAL_SPEED = 200;
const INITIAL_SNAKE = [
  { x: 3, y: 5 },
  { x: 3, y: 4 },
  { x: 3, y: 3 },
];
const RIGHT = "ArrowRight";
const LEFT = "ArrowLeft";
const UP = "ArrowUp";
const DOWN = "ArrowDown";

const generateFruit = () => ({
  x: Math.floor(Math.random() * 20) + 1,
  y: Math.floor(Math.random() * 20) + 1,
});

const Snake = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [fruit, setFruit] = useState(generateFruit());
  const [direction, setDirection] = useState(RIGHT);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [stop, setStop] = useState(false);

  const handleRestart = () => {
    setSnake(INITIAL_SNAKE);
    setFruit(generateFruit());
    setDirection(RIGHT);
    setSpeed(INITIAL_SPEED);
    setStop(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if(stop) return;
      let head = { ...snake[0] };
      if (direction === RIGHT) {
        head.y += 1;
      }
      if (direction === LEFT) {
        head.y -= 1;
      }
      if (direction === UP) {
        head.x -= 1;
      }
      if (direction === DOWN) {
        head.x += 1;
      }

      if (
        head.x > COLUM ||
        head.x < 1 ||
        head.y > COLUM ||
        head.y < 1 ||
        snake.some((item) => item.x === head.x && item.y === head.y)
      ) {
        setStop(true);
        return;
      }
      const snakeCopy = [head, ...snake];
      if (head.x === fruit.x && head.y === fruit.y) {
        let newFruit = generateFruit();
        // eslint-disable-next-line no-loop-func
        while (snake.some((el) => el.x === newFruit.x && el.y === newFruit.y)) {
          newFruit = generateFruit();
        }
        setFruit(newFruit);
        if (snake.length > 5) {
          setSpeed((prevSpeed) =>
            prevSpeed <= STEP ? STEP : prevSpeed - STEP
          );
        }
      } else {
        snakeCopy.pop();
      }
      setSnake(snakeCopy);
    }, speed);

    return () => {
      clearInterval(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snake, direction, fruit, speed]);

  useEffect(() => {
    const handleChangeDirection = ({ key }) => {
      if (
        (key === LEFT && direction === RIGHT) ||
        (key === RIGHT && direction === LEFT) ||
        (key === UP && direction === DOWN) ||
        (key === DOWN && direction === UP) ||
        stop
      )
        return;
      setDirection(key);
    };
    window.addEventListener("keydown", handleChangeDirection);

    return () => {
      window.removeEventListener("keydown", handleChangeDirection);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  return (
    <div className={cx("container")}>
      <div>
        {Array.from({ length: COLUM }, (_, i) => i + 1).map((colX) => (
          <div key={`x_${colX}`} className={cx("row")}>
            {Array.from({ length: COLUM }, (_, i) => i + 1).map((colY) => {
              let type;
              if (snake.some((el) => el.x === colX && el.y === colY)) {
                type = "snake";
              } else if (colX === fruit.x && colY === fruit.y) {
                type = "fruit";
              }
              return <div key={`y_${colY}`} className={cx("colum", type)} />;
            })}
          </div>
        ))}
      </div>
      {stop && (
        <div className={cx("alert")}>
          <p>BOOM!</p>
          <button type="button" onClick={handleRestart}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default Snake;
