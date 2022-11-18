import React, { useRef, useEffect } from "react";
import { BsPlusLg, BsCheck2Square } from "react-icons/bs";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const SignArea = ({ visible, onSave, onClose }) => {
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");

  const handleClear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  const handleSave = () => {
    const newImg = canvas.toDataURL("image/png");
    onSave(newImg);
    onClose();
  };

  useEffect(() => {
    if (canvas) {
      canvas.width = 500;
      canvas.height = 250;
      canvas.borderColor = '#2ac489';
      // 設定線條的相關數值
      ctx.lineWidth = 4;
      ctx.lineCap = "round";

      // 設置狀態來確認滑鼠 / 手指是否按下或在畫布範圍中
      let isPainting = false;

      // 開始繪圖時，將狀態開啟
      function startPosition(e) {
        e.preventDefault();
        isPainting = true;
      }

      // 結束繪圖時，將狀態關閉，並產生新路徑
      function finishedPosition() {
        isPainting = false;
        ctx.beginPath();
      }

      // 取得滑鼠 / 手指在畫布上的位置
      function getPaintPosition(e) {
        const canvasSize = canvas.getBoundingClientRect();

        if (e.type === "mousemove") {
          return {
            x: e.clientX - canvasSize.left,
            y: e.clientY - canvasSize.top,
          };
        } else {
          return {
            x: e.touches[0].clientX - canvasSize.left,
            y: e.touches[0].clientY - canvasSize.top,
          };
        }
      }

      // 繪圖過程
      function draw(e) {
        // 滑鼠移動過程中，若非繪圖狀態，則跳出
        if (!isPainting) return;

        // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
        const paintPosition = getPaintPosition(e);

        // 移動滑鼠位置並產生圖案
        ctx.lineTo(paintPosition.x, paintPosition.y);
        ctx.stroke();
      }

      // event listener 電腦板
      canvas.addEventListener("mousedown", startPosition);
      canvas.addEventListener("mouseup", finishedPosition);
      canvas.addEventListener("mouseleave", finishedPosition);
      canvas.addEventListener("mousemove", draw);

      // event listener 手機板
      canvas.addEventListener("touchstart", startPosition);
      canvas.addEventListener("touchend", finishedPosition);
      canvas.addEventListener("touchcancel", finishedPosition);
      canvas.addEventListener("touchmove", draw);

      return () => {
        canvas.removeEventListener("mousedown", startPosition);
        canvas.removeEventListener("mouseup", finishedPosition);
        canvas.removeEventListener("mouseleave", finishedPosition);
        canvas.removeEventListener("mousemove", draw);
        canvas.removeEventListener("touchstart", startPosition);
        canvas.removeEventListener("touchend", finishedPosition);
        canvas.removeEventListener("touchcancel", finishedPosition);
        canvas.removeEventListener("touchmove", draw);
      };
    }
  }, [canvas]);

  return (
    <div className={cx("signArea", !visible && "hide")}>
      <div>
        <div className={cx("header")}>
          <button type="button" onClick={onClose}>
            <BsPlusLg />
          </button>
        </div>
        <canvas ref={canvasRef} />
        <div className={cx("buttonsContainer")}>
          <button type="button" onClick={handleClear}>
            clear
          </button>
          <button type="button" onClick={handleSave}>
            <BsCheck2Square />
            <span> &nbsp;&nbsp;save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignArea;
