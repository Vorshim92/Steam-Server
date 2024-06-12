import React from "react";
import { Game } from "../interfaces/types";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <>
      <div className="card">
        <img src={game.image || "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"} alt={game.name} />
        <div className="card-body">
          <h5 className="card-title">{game.name}</h5>
          <p className="card-text">{game.description}</p>
        </div>
      </div>
    </>
  );
};
export default GameCard;
