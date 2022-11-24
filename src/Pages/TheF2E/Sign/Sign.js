import React, { useState, useRef, useEffect } from "react";
import { fabric } from "fabric";
import { jsPDF } from "jspdf";
import { BsUpload, BsDownload, BsPencilSquare } from "react-icons/bs";
import { Helmet } from "react-helmet";

import SignArea from "./SignArea";
import Spinner from "./Spinner";
import Tutorial from "./Tutorial";
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
  const [hasUploadPdf, setHasUploadPdf] = useState(false);
  const [hasSign, setHasSign] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  // 使用原生 FileReader 轉檔
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
    setIsLoading(true);
    const pdfData = await printPDF(e.target.files[0]);
    const pdfImage = await pdfToImage(pdfData);

    // 透過比例設定 canvas 尺寸
    fabricRef.current.setWidth(pdfImage.width / window.devicePixelRatio);
    fabricRef.current.setHeight(pdfImage.height / window.devicePixelRatio);

    // 將 PDF 畫面設定為背景
    fabricRef.current.setBackgroundImage(
      pdfImage,
      fabricRef.current.renderAll.bind(fabricRef.current)
    );

    setHasUploadPdf(true);
    setIsLoading(false);
  };

  const handleSaveSign = (img) => {
    fabric.Image.fromURL(img, function (image) {
      // 設定簽名出現的位置及大小，後續可調整
      image.top = 400;
      image.scaleX = 0.5;
      image.scaleY = 0.5;
      fabricRef.current.add(image);
    });
    setHasSign(true);
  };

  const handleOpen = () => {
    setIsOpenSignArea(true);
  };
  const handleClose = () => {
    setIsOpenSignArea(false);
  };
  const handleSave = () => {
    const image = fabricRef.current.toDataURL("image/png");
    const pdf = new jsPDF();

    // 設定背景在 PDF 中的位置及大小
    const width = pdf.internal.pageSize.width;
    const height =
      (pdf.internal.pageSize.width * fabricRef.current.height) /
      fabricRef.current.width;
    pdf.addImage(image, "png", 0, 0, width, height);

    // 將檔案取名並下載
    pdf.save("download.pdf");
  };

  const handleCloseTutorial = () => {
    setIsInitial(false);
  };

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className={cx("wrapper")}>
        <Helmet>
          <title>Dotted Sign</title>
          <meta name="description" content="The F2E 4th week 2" />
          <meta property="og:title" content="今晚我想來點點簽" />
          <meta property="og:image" content="https://2022.thef2e.com/_nuxt/img/week2.1fad838.png" />
        </Helmet>
        <div className={cx("buttons")}>
          <label>
            <BsUpload />
            <span>&nbsp;&nbsp;選擇PDF檔案</span>
            <input
              type="file"
              accept="application/pdf"
              placeholder="選擇PDF檔案"
              onChange={handleFileChange}
            />
          </label>
          <button type="button" onClick={handleOpen} disabled={!hasUploadPdf}>
            <BsPencilSquare />
            <span>&nbsp;&nbsp;加入簽名</span>
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={!hasUploadPdf || !hasSign}
          >
            <BsDownload />
            <span>&nbsp;&nbsp;下載檔案</span>
          </button>
        </div>
        {isLoading && (
          <div className={cx("loading")}>
            <Spinner />
          </div>
        )}
        <div className={cx("fileContainer")}>
          <canvas ref={canvasRef} />
        </div>
        <SignArea
          visible={isOpenSignArea}
          onSave={handleSaveSign}
          onClose={handleClose}
        />
      </div>
      {isInitial && <Tutorial onClose={handleCloseTutorial} />}
    </>
  );
};

export default Sign;
