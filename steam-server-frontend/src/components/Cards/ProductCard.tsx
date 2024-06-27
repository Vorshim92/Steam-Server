import React from "react";
import { Game } from "../../interfaces/types";
import "./ProductCard.scss";
const ProductCard = ({ game }: { game: Game }) => {
  return (
    <>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="product-card position-relative cursor-pointer d-flex flex-row w-100">
          <a href={`/products/${game.id}`} className="cursor-pointer">
            <div className="position-relative d-flex w-100 align-items-center justify-content-center overflow-hidden">
              <img src={game.image_vertical ?? "storage/game_images/default_image_vertical.jpg"} alt="ARK: Survival Ascended Game Server" className="h-100 w-100 " />
              <div className=" top-0 start-0 w-100 h-100 bg-dark opacity-30 transition-opacity"></div>
              <img src={game.image_title ?? "storage/game_images/default_image_title.jpg"} alt="ARK: Survival Ascended" className="position-absolute start-50 top-50 mh-60 translate-middle px-3 transition filter-grayscale-50 opacity-80" />
              <div className="position-absolute top-0 d-flex w-100 justify-content-between px-2 pt-1">
                <div className="d-flex flex-column"></div>
                <div className="d-flex flex-column">
                  <span className="d-inline-block text-center font-semibold my-1 bg-secondary text-white rounded-md ">
                    <span className="position-relative">
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="random" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="me-1 translate-middle svg-inline--fa fa-random">
                        <path
                          fill="currentColor"
                          d="M505 400l-79.2 72.9c-15.1 15.1-41.8 4.4-41.8-17v-40h-31c-3.3 0-6.5-1.4-8.8-3.9l-89.8-97.2 38.1-41.3 79.8 86.3H384v-48c0-21.4 26.7-32.1 41.8-17l79.2 71c9.3 9.6 9.3 24.8 0 34.2zM12 152h91.8l79.8 86.3 38.1-41.3-89.8-97.2c-2.3-2.5-5.5-3.9-8.8-3.9H12c-6.6 0-12 5.4-12 12v32c0 6.7 5.4 12.1 12 12.1zm493-41.9l-79.2-71C410.7 24 384 34.7 384 56v40h-31c-3.3 0-6.5 1.4-8.8 3.9L103.8 360H12c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h111c3.3 0 6.5-1.4 8.8-3.9L372.2 152H384v48c0 21.4 26.7 32.1 41.8 17l79.2-73c9.3-9.4 9.3-24.6 0-33.9z"
                          className=""
                        ></path>
                      </svg>
                      <span>Crossplay</span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="position-absolute bottom-0 w-100 px-4 pb-4 fs-5 font-light lh-tight text-white">
                <h4 className="mt-4">{game.name}</h4>
              </div>
            </div>
            <div className="z-20 w-100 bg-secondary px-6 py-4 opacity-100">
              <div className="d-flex">
                <div className="flex-initial">
                  <span className="position-relative top-1 pr-1 fs-6 font-medium text-light">da</span>
                </div>
                <div className="flex-initial">
                  <span className=" fs-3 fw-semibold lh-1 text-white">4,</span>
                </div>
                <div className="d-flex flex-column">
                  <p className="ps-1 fs-6 fw-semibold text-white">79 €</p>
                  <p className="position-relative top-0 ps-1 fs-7 fw-semibold text-light">/3 giorni</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
