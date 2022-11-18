import React, { useState, useRef, useEffect } from "react";
import { fabric } from "fabric";

import SignArea from './SignArea';
import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const pdfjs = require("pdfjs-dist");
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const Base64Prefix = "data:application/pdf;base64,";

const Sign = () => {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);
  const [isOpenSignArea, setIsOpenSignArea] = useState(false);

  // 使用原生 FileReader 轉檔
  const readBlob = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result));
      reader.addEventListener("error", reject);
      reader.readAsDataURL(blob);
    });
  }

  const printPDF = async (pdfData) => {
    // 將檔案處理成 base64
    pdfData = await readBlob(pdfData);

    // 將 base64 中的前綴刪去，並進行解碼
    const data = atob(pdfData.substring(Base64Prefix.length));

    // 利用解碼的檔案，載入 PDF 檔及第一頁
    const pdfDoc = await pdfjs.getDocument({ data }).promise;
    const pdfPage = await pdfDoc.getPage(1);

    // 設定尺寸及產生 canvas
    const viewport = pdfPage.getViewport({ scale: window.devicePixelRatio });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // 設定 PDF 所要顯示的寬高及渲染
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderContext = {
      canvasContext: context,
      viewport,
    };
    const renderTask = pdfPage.render(renderContext);

    // 回傳做好的 PDF canvas
    return renderTask.promise.then(() => canvas);
  };

  const pdfToImage = (pdfData) => {
    // 設定 PDF 轉為圖片時的比例
    const scale = 1 / window.devicePixelRatio;

    // 回傳圖片
    return new fabric.Image(pdfData, {
      id: "renderPDF",
      scaleX: scale,
      scaleY: scale,
    });
  };

  const handleFileChange = async (e) => {
    const pdfData = await printPDF(e.target.files[0]);
    const pdfImage = await pdfToImage(pdfData);

    // 透過比例設定 canvas 尺寸
    fabricRef.current.setWidth(pdfImage.width / window.devicePixelRatio);
    fabricRef.current.setHeight(pdfImage.height / window.devicePixelRatio);

    // // 將 PDF 畫面設定為背景
    fabricRef.current.setBackgroundImage(pdfImage, fabricRef.current.renderAll.bind(fabricRef.current));
  };

  const handleSaveSign = (img) => {
    fabric.Image.fromURL(img, function (image) {
      // 設定簽名出現的位置及大小，後續可調整
      image.top = 400;
      image.scaleX = 0.5;
      image.scaleY = 0.5;
      fabricRef.current.add(image);
    });
  }

  const handleOpen = () => {
    setIsOpenSignArea(true);
  }
  const handleClose = () => {
    setIsOpenSignArea(false);
  }

  useEffect(()=>{
    const initFabric = () => {
      fabricRef.current = new fabric.Canvas(canvasRef.current);
    };

    const disposeFabric = () => {
      fabricRef.current.dispose();
    };

    initFabric();

    return () => {
      disposeFabric();
    };

  },[])

  return (
    <div className={cx("wrapper")}>
      今晚我想來點點簽
      <input
        type="file"
        accept="application/pdf"
        placeholder="選擇PDF檔案"
        onChange={handleFileChange}
      />
      <button type='button' onClick={handleOpen}>加入簽名</button>
      <div className={cx("fileContainer")}>
        <canvas ref={canvasRef} />
      </div>
      <SignArea visible={isOpenSignArea} onSave={handleSaveSign} onClose={handleClose} />
    </div>
  );
};

export default Sign;
