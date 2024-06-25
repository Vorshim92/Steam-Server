import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import { Game } from "../interfaces/types";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import StoreSlider from "../components/Slider/StoreSlider";
import axios from "axios";
const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("/api/v1/games");
        const data: Game[] = response.data.data;
        setGames(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="container">
      <div className="row gap-3">
        {games && <StoreSlider newsData={games} />}
        <div>
          <div className="mb-3 d-none w-100 d-sm-flex">
            <span className="d-flex flex-grow-1 align-items-center justify-content-center text-center border-bottom border-2 border-secondary px-2 py-3 py-lg-4">
              <div className="d-flex align-items-center justify-content-center">
                <span className="me-2 d-none d-md-inline-block rounded-pill px-3 py-1 bg-secondary text-dark">SVG</span>
                <span className="text-truncate fw-semibold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">Giochi Top</span>
              </div>
            </span>
            <span className="d-flex flex-grow-1 align-items-center justify-content-center text-center border-bottom border-2 border-warning px-2 py-3 py-lg-4 cursor-pointer hover-border-secondary">
              <div className="d-flex align-items-center justify-content-center">
                <span className="me-2 d-none d-md-inline-block rounded-pill px-3 py-1 bg-warning text-light">SVG</span>
                <span className="text-truncate fw-semibold text-light text-lg sm:text-xl md:text-2xl lg:text-3xl">Giochi In Evidenza</span>
              </div>
            </span>
            <span className="d-flex flex-grow-1 align-items-center justify-content-center text-center border-bottom border-2 border-secondary px-2 py-3 py-lg-4 cursor-pointer hover-border-secondary">
              <div className="d-flex align-items-center justify-content-center">
                <span className="me-2 d-none d-md-inline-block rounded-pill px-3 py-1 bg-secondary text-light">SVG</span>
                <span className="text-truncate fw-semibold text-light text-lg sm:text-xl md:text-2xl lg:text-3xl">Ultimi giochi</span>
              </div>
            </span>
          </div>

          <div className="d-flex justify-content-evenly">
            {games &&
              games.slice(0, 3).map((game) => (
                <div className="col-3" key={game.id}>
                  <GameCard game={game} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
