import React from "react";
import { Game } from "../interfaces/types";
import "./GameCard.scss";
const GameCard = ({ game }: { game: Game }) => {
  return (
    <>
      <div className="containerV">
        <div className="cardV">
          <div className="cardV__image-container">
            <img className="cardV__image" src={game.image_vertical || "http://localhost:8000/storage/game_images/default_image_vertical.png"} alt="game" />
          </div>

          <svg className="cardV__svg" viewBox="0 0 800 500">
            <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
            <path className="cardV__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="5" fill="transparent" />
          </svg>

          <div className="cardV__content">
            <h1 className="cardV__title">{game.name}</h1>
            <p>{game.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default GameCard;
