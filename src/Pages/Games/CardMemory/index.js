import React, { useState, useEffect } from "react";

import CARD1 from "../../../image/games/card1.jpg";
import CARD2 from "../../../image/games/card2.jpg";
import CARD3 from "../../../image/games/card3.jpeg";
import CARD4 from "../../../image/games/card4.jpg";
import CARD5 from "../../../image/games/card5.jpg";
import CARD6 from "../../../image/games/card6.jpg";
import CARD_BG from "../../../image/games/card_bg.jpeg";
import classes from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const CARD_IMAGES = [
  {
    name: "toothy",
    imgUrl: CARD1,
  },
  {
    name: "scream",
    imgUrl: CARD2,
  },
  {
    name: "RollEyes",
    imgUrl: CARD3,
  },
  {
    name: "potatoGreen",
    imgUrl: CARD4,
  },
  {
    name: "potatoYellow",
    imgUrl: CARD5,
  },
  {
    name: "egg",
    imgUrl: CARD6,
  },
];

const CardMemory = () => {
  const [cards, setCards] = useState([]);
  const [firstChoice, setfirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  const handleClick = (card) => {
    console.log(card);
    firstChoice ? setSecondChoice(card) : setfirstChoice(card);
  };

  useEffect(() => {
    const shuffledCards = [...CARD_IMAGES, ...CARD_IMAGES]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: `card_${Math.floor(Math.random() * 1000)}`,
        matched: false,
      }));
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (firstChoice?.name === secondChoice?.name) {
      console.log("matched");
    }
  }, [firstChoice, secondChoice]);

  return (
    <div className={cx("wrap")}>
      <div className={cx("outer")}>
        <div className={cx("inner")}>
          {cards.map((card) => {
            const { id, imgUrl, matched } = card;
            const beChoiced =
              matched || firstChoice?.id === id || secondChoice?.id === id;
            return (
              <div
                key={id}
                className={cx("card")}
                onClick={() => {
                  handleClick(card);
                }}
              >
                <div className={cx("inner")}>
                  <img className={cx("front", !beChoiced ? "show" : "hide")} src={CARD_BG} alt="card" />
                  <img
                    className={cx("back", beChoiced ? "show" : "hide")}
                    src={imgUrl}
                    alt="card"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardMemory;
