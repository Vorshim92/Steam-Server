import { useState } from "react";
import "./FalloutCard.scss";
import { Game, Service } from "../../interfaces/types";
const FalloutCard = ({ service }: { service: Service }) => {
  const [cardFlipped, setCardFlipped] = useState(false);
  const [unflipping, setUnflipping] = useState(false);

  const handleCardClick = (e: any) => {
    e.stopPropagation();

    if (cardFlipped) {
      setUnflipping(true);
      setCardFlipped(false);
    } else {
      setCardFlipped(true);
      setUnflipping(false);
    }
  };

  return (
    <>
      <div className="card-scene ">
        <div className={`fallout-card ${cardFlipped ? "card--flipped" : ""} ${unflipping ? "card--unflip" : ""}`} onClick={handleCardClick}>
          <div className="card-face card-backing">
            <div className="grain-overlay"></div>
            <div className="bump"></div>
            <div className="top-banner"></div>
            <div className="back-main">
              <div className="pipboy">
                <div className="twelve-point-star"></div>
                <img src="https://vignette.wikia.nocookie.net/fallout/images/c/c0/VaultBoyFO3.png/revision/latest?cb=20110809182235" />
              </div>
              <div className="vault-tec">
                <div className="center"></div>
                <div className="lines">
                  <div className="line line--left">
                    <div className="line-inner"></div>
                    <div className="line-inner"></div>
                    <div className="line-inner"></div>
                  </div>
                  <div className="line line--right">
                    <div className="line-inner"></div>
                    <div className="line-inner"></div>
                    <div className="line-inner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-face card-front">
            <h1>
              <span className="bump">
                <b className="outer">
                  <b className="inner">{service.ram}</b>
                </b>
              </span>
              {service.game_name}
            </h1>
            <div className="main-pane">
              <img className="slugger" src="https://vignette.wikia.nocookie.net/fallout/images/6/69/Fo76_Slugger.png/revision/latest/scale-to-width-down/353?cb=20181125171021" />
            </div>
            <div className="desc">
              <p>{service.description}</p>
              <div className="special" data-category="strength">
                {service.price}
              </div>
              <div id="level" className="level" data-level-cap="3" data-level-current="1"></div>
            </div>
            <div className="grain-overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FalloutCard;
