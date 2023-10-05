import React from "react";
import Card from "./CardComponent";
import "./StateComponent.css";

const CardList = ({ cards, currentIndex, onPrevClick, onNextClick }) => {
  const states = ["previous--card", "current--card", "next--card"];
  return (
    <div className="cardList">
      <button className="cardList__btn bttttn btn--left" >
        <svg>
          <use xlinkHref="#arrow-left"></use>
        </svg>
      </button>

      <div className="cards__wrapper">
        {cards.map((card, index) => (
          <Card
            current_state={states[index]}
            key={index}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>

      <button className="cardList__btn bttttn btn--right" >
        <svg>
          <use xlinkHref="#arrow-right"></use>
        </svg>
      </button>

      <svg class="icons" style={{ display: "none" }}>
        <symbol
          id="arrow-left"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <polyline
            points="328 112 184 256 328 400"
            style={{
              fill: "none",
              stroke: "#000",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "48px",
            }}
          />
        </symbol>
        <symbol
          id="arrow-right"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <polyline
            points="184 112 328 256 184 400"
            style={{
              fill: "none",
              stroke: "#000",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "48px",
            }}
          />
        </symbol>
      </svg>
    </div>
  );
};

export default CardList;
