import { Link, Navigate, useNavigate } from "react-router-dom";
import "./ClashCard.scss";
import { useAppDispatch } from "../../redux/hooks";
import { Service } from "../../interfaces/types";
const ServiceCard = ({ service }: { service: Service }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: "SERVICE_ADD", payload: service });
    navigate("/checkout");
  };

  return (
    <>
      <div className="d-flex col-12 col-md-6 col-lg-4 mb-3" onClick={handleClick}>
        <div className="clash-card">
          <div className="clash-card__image" style={{ backgroundImage: `url(storage/game_images/default_image_vertical.png)` }}>
            <div className="div-img">
              <img src="storage/game_images/default_image_vertical.png" alt="" />
            </div>
          </div>
          <div className="clash-card__level">Level 4</div>
          <div className="clash-card__unit-name">TEST</div>
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
      </div>
    </>
  );
};

export default ServiceCard;
