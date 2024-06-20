import React from "react";
import { Game } from "../interfaces/types";
import "./GameCard.scss";
const GameCard = ({ game }: { game: Game }) => {
  return (
    <>
      <div className="containerV">
        <div className="cardV">
          <div className="cardV__image-container">
            <img className="cardV__image" src="http://localhost:8000/storage/game_images/default_image_vertical.jpg" alt="" />
          </div>

          <svg className="cardV__svg" viewBox="0 0 800 500">
            <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
            <path className="cardV__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="5" fill="transparent" />
          </svg>

          <div className="cardV__content">
            <h1 className="cardV__title">Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default GameCard;
