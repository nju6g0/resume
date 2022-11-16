import React, { useEffect, useRef } from "react";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const SignArea = ({ visible, onConfirm, onClose }) => {
  const canvasRef = useRef(null);

  const canvas = canvasRef?.current;
  const ctx = canvas?.getContext("2d");

  function reset() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  function saveImage() {
    // 圖片儲存的類型選擇 png ，並將值放入 img 的 src
    const newImg = canvas.toDataURL("image/png");
    onConfirm(newImg);
  }

  useEffect(() => {
    // 設置狀態來確認滑鼠 / 手指是否按下或在畫布範圍中
    let isDrawing = false;

    if (ctx) {
      canvas.width = 300;
      canvas.height = 200;

      // 設定線條的相關數值
      ctx.lineWidth = 4;
      ctx.lineCap = "round";

      // 取得滑鼠 / 手指在畫布上的位置
      const getDrawPosition = (e) => {
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
      };

      // 開始繪圖時，將狀態開啟
      const startDraw = (e) => {
        e.preventDefault();
        isDrawing = true;
      };

      // 結束繪圖時，將狀態關閉，並產生新路徑
      const finishedDraw = () => {
        isDrawing = false;
        ctx.beginPath();
      };

      // 繪圖過程
      const draw = (e) => {
        // 滑鼠移動過程中，若非繪圖狀態，則跳出
        if (!isDrawing) return;

        // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
        const paintPosition = getDrawPosition(e);

        // 移動滑鼠位置並產生圖案
        ctx.lineTo(paintPosition.x, paintPosition.y);
        ctx.stroke();
      };

      // event listener: web
      canvas.addEventListener("mousedown", startDraw);
      canvas.addEventListener("mouseup", finishedDraw);
      canvas.addEventListener("mouseleave", finishedDraw);
      canvas.addEventListener("mousemove", draw);

      // event listener: mobil
      canvas.addEventListener("touchstart", startDraw);
      canvas.addEventListener("touchend", finishedDraw);
      canvas.addEventListener("touchcancel", finishedDraw);
      canvas.addEventListener("touchmove", draw);

      return () => {
        canvas.removeEventListener("mousedown", startDraw);
        canvas.removeEventListener("mouseup", finishedDraw);
        canvas.removeEventListener("mouseleave", finishedDraw);
        canvas.removeEventListener("mousemove", draw);
        canvas.removeEventListener("touchstart", startDraw);
        canvas.removeEventListener("touchend", finishedDraw);
        canvas.removeEventListener("touchcancel", finishedDraw);
        canvas.removeEventListener("touchmove", draw);
      };
    }
  }, [ctx]);

  return (
    <div className={cx("signArea", !visible && "hide")}>
      <div className={cx("container")}>
        <button type="button" onClick={onClose}>close</button>
        <div>
          <canvas ref={canvasRef}></canvas>
        </div>
        <button type="button" onClick={reset}>reset</button>
        <button type="button" onClick={saveImage}>save</button>
      </div>
    </div>
  );
};

export default SignArea;
