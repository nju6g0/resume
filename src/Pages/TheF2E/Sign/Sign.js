import React, { useState, useRef } from "react";

import { fabric } from "fabric";
import SignArea from "./SignArea";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const BASE64PREFIX = "data:application/pdf;base64,";

const Sign = () => {
  const canvasImgRef = useRef(null);
  const [isShowPopup, setIsShowPopup] = useState(false);

  const canvas = new fabric.Canvas(canvasImgRef.current);
  const readBlob = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result));
      reader.addEventListener("error", reject);
      reader.readAsDataURL(blob);
    });
  };
  const printPDF = async (pdfData) => {
    // 將檔案處理成 base64
    pdfData = await readBlob(pdfData);

    // 將 base64 中的前綴刪去，並進行解碼
    const data = atob(pdfData.substring(BASE64PREFIX.length));
    return data;
  };

  const handleFileChange = async (e) => {
    const pdfData = await printPDF(e.target.files[0]);
  };

  const handleConfirmSign = (sign) => {
    fabric.Image.fromURL(sign, function (image) {
      canvas.setDimensions({ width: 600, height: 600 });
      // 設定簽名出現的位置及大小，後續可調整
      const oImg = image.set({
        left: 0,
        top: 0,
      });
      canvas.add(oImg);
    });
    setIsShowPopup(false);
  };

  const openPopup = () => {
    setIsShowPopup(true);
  };
  const handleClose = () => {
    setIsShowPopup(false);
  };
  const handleSave = () => {
    console.warn("nothing happen");
  };

  return (
    <>
      <p style={{color: '#aaa', marginTop: "100px", textAlign: "center"}}>to be continue...</p>
      <div className={cx("wrapper")}>
        <div className={cx("buttons")}>
          <label>
            選擇檔案
            <input
              type="file"
              accept="application/pdf"
              placeholder="選擇PDF檔案"
              onChange={handleFileChange}
            />
          </label>
          <button type="button" onClick={openPopup}>
            加入簽名
          </button>
          <button type="button" onClick={handleSave}>
            下載檔案
          </button>
        </div>
        <div className={cx("canvasContainer")}>
          <canvas ref={canvasImgRef}></canvas>
        </div>
        <SignArea
          visible={isShowPopup}
          onConfirm={handleConfirmSign}
          onClose={handleClose}
        />
      </div>
    </>
  );
};

export default Sign;
