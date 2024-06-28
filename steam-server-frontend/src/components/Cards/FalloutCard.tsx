import { useState } from "react";
import "./FalloutCard.scss";
const FalloutCard = () => {
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
      <div className="card-scene">
        <div id="card" className={`card ${cardFlipped ? "card--flipped" : ""} ${unflipping ? "card--unflip" : ""}`} onClick={handleCardClick}>
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
                  <b className="inner">1</b>
                </b>
              </span>
              Slugger
            </h1>
            <div className="main-pane">
              <img className="slugger" src="https://vignette.wikia.nocookie.net/fallout/images/6/69/Fo76_Slugger.png/revision/latest/scale-to-width-down/353?cb=20181125171021" />
            </div>
            <div className="desc">
              <p>Your two-handed melee weapons now do +10% damage.</p>
              <div className="special" data-category="strength">
                S
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
