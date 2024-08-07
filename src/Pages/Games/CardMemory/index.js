import React, { useState, useEffect } from "react";

import CARD1 from "../../../image/games/card1.jpg";
import CARD2 from "../../../image/games/card2.jpg";
import CARD3 from "../../../image/games/card3.jpg";
import CARD4 from "../../../image/games/card4.jpg";
import CARD5 from "../../../image/games/card5.jpg";
import CARD6 from "../../../image/games/card6.jpg";
import CARD_BG from "../../../image/games/card_bg.jpg";
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
  const [disabled, setDisabled] = useState(false);

  const handleClick = (card) => {
    if (disabled) return;
    if (firstChoice && firstChoice.id === card.id) return;
    if (card.matched) return;

    firstChoice ? setSecondChoice(card) : setfirstChoice(card);
  };

  const clearChoice = () => {
    setfirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  const handleRestart = () => {
    const shuffledCards = [...CARD_IMAGES, ...CARD_IMAGES]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: `card_${Math.floor(Math.random() * 1000)}`,
        matched: false,
      }));
    setCards(shuffledCards);
    clearChoice();
  };

  useEffect(() => {
    handleRestart();
  }, []);

  useEffect(() => {
    const handleMatch = () => {
      const matchedArray = cards.map((card) => ({
        ...card,
        matched: card.matched || card.name === firstChoice?.name,
      }));
      setCards(matchedArray);
    };
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice?.name === secondChoice?.name) {
        handleMatch();
      }
      window.setTimeout(() => {
        clearChoice();
      }, 700);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstChoice, secondChoice]);

  return (
    <div className={cx("wrap")}>
      <button type="button" onClick={handleRestart}>
        Restart
      </button>
      <div className={cx("outer")}>
        <div className={cx("inner")}>
          {cards.map((card) => {
            const { id, imgUrl, matched } = card;
            const beChoiced = matched || firstChoice?.id === id || secondChoice?.id === id;
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
                  <img className={cx("back", beChoiced ? "show" : "hide")} src={imgUrl} alt="card" />
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
