import React from "react";
import classnames from "classnames";
import pokeball from "./images/logo512.png";
import "./card.scss";
import { useState } from "react";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
    >
      {" "}
      {!isFlipped ? (
        <div className="card-face card-font-face">
          <img src={pokeball} />
        </div>
      ) : (
        <div className="dcard-face card-back-face">
          <img src={card.image} />
        </div>
      )}
    </div>
  );
};

export default Card;
