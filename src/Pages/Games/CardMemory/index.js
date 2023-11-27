import React from "react";

import CARD1 from "../../../image/games/card1.jpg";
import CARD2 from "../../../image/games/card2.jpg";
import CARD3 from "../../../image/games/card3.jpeg";
import CARD4 from "../../../image/games/card4.jpg";
import CARD5 from "../../../image/games/card5.jpg";
import CARD6 from "../../../image/games/card6.jpg";
import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const CARD_IMAGES = [CARD1, CARD2, CARD3, CARD4, CARD5, CARD6];

const CardMemory = () => {
  return (
    <div className={cx("wrap")}>
      <div className={cx("outer")}>
        <div className={cx("inner")}>
          {CARD_IMAGES.map((url, idx) => (
            <div key={`card_${idx}`} className={cx("card")}>
              <div className={cx("inner")} style={{ backgroundImage: `url(${url})` }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardMemory;
