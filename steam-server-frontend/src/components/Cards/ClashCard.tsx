import { Game } from "../../interfaces/types";
import "./ClashCard.scss";
import { Link } from "react-router-dom";
const ClashCard = ({ game }: { game: Game }) => {
  return (
    <>
      <div className="d-flex col-12 col-md-6 col-lg-4 mb-3">
        <Link to={`/products/${game.id}`}>
          <div className="clash-card">
            <div className="clash-card__image" style={{ backgroundImage: `url(${game.image_vertical})` }}>
              <div className="div-img">
                <img src={game.image_title || "storage/game_images/default_image_vertical.png"} alt={game.name} />
              </div>
            </div>
            <div className="clash-card__level">Level 4</div>
            <div className="clash-card__unit-name">{game.name}</div>
            <div className="clash-card__unit-description">The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.</div>

            <div className="clash-card__unit-stats clearfix">
              <div className="one-third">
                <div className="stat">
                  20<sup>S</sup>
                </div>
                <div className="stat-value">Training</div>
              </div>

              <div className="one-third">
                <div className="stat">16</div>
                <div className="stat-value">Speed</div>
              </div>

              <div className="one-third no-border">
                <div className="stat">150</div>
                <div className="stat-value">Cost</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ClashCard;
