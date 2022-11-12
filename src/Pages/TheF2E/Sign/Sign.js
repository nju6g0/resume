import React, { useState, useEffect, useRef } from "react";

import SignArea from "./SignArea";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const BASE64PREFIX = "data:application/pdf;base64,";

const Sign = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [hasFile, setHasFile] = useState(false);
  const [signSrc, setSignSrc] = useState("");

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
    // TODO: show PDF
    setHasFile(true);
  };

  const handleConfirmSign = (sign) => {
    setSignSrc(sign);
    setIsShowPopup(false);
  };

  const openPopup = () => {
    setIsShowPopup(true);
  };
  const handleClose = () => {
    setIsShowPopup(false);
  };
  const handleCancel = () => {
    setIsShowPopup(false);
  };
  const handleSave = () => {
    console.warn('nothing happen');
  }

  useEffect(() => {
    // console.log(signSrc.length);
  });

  return (
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
        <button type="button" disabled={!hasFile} onClick={openPopup}>
          加入簽名
        </button>
        <button type="button" disabled={!hasFile || !signSrc} onClick={handleSave}>
          下載檔案
        </button>
      </div>
      <SignArea
        visible={isShowPopup}
        onConfirm={handleConfirmSign}
        onClose={handleClose}
        onCancel={handleCancel}
      />
      {signSrc && <img src={signSrc} alt="" />}
    </div>
  );
};

export default Sign;
