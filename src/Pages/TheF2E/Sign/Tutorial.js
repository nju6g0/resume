import React from "react";
import { BsPen, BsUpload, BsDownload, BsPencilSquare } from "react-icons/bs";

import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Tutorial = ({ onClose }) => {
  return (
    <div className={cx("tutorial")}>
      <h3>Welcome DottedSign</h3>
      <p>
        Sign easily&nbsp;&nbsp;&nbsp;&nbsp;
        <BsPen />
      </p>
      <div className={cx("steps")}>
        <div>
          <div>
            <BsUpload />
          </div>
          <span>upload file</span>
        </div>
        <div>
          <div>
            <BsPencilSquare />
          </div>
          <span>sign</span>
        </div>
        <div>
          <div>
            <BsDownload />
          </div>
          <span>download file</span>
        </div>
      </div>
      <button type="button" onClick={onClose}>
        try now
      </button>
      {Array.from({ length: 3 }, (x, i) => i).map((el) => (
        <div key={`circles_${el}`} className={cx("circles")}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      ))}
    </div>
  );
};

export default Tutorial;
