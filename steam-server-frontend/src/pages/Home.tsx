import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import { Game } from "../interfaces/types";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import StoreSlider from "../components/Slider/StoreSlider";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("isFeatured");

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
    <div className="row gap-3">
      {games && <StoreSlider newsData={games} />}
      <div>
        <div className="mb-3 d-none w-100 d-sm-flex">
          <span
            className={`d-flex flex-grow-1 align-items-center justify-content-center text-center border-bottom border-2 px-2 py-3 py-lg-4 ${selectedCategory === "isTop" ? "border-warning" : "border-secondary"} cursor-pointer`}
            onClick={() => setSelectedCategory("isTop")}
          >
            <div className="d-flex align-items-center justify-content-center">
              <span className={`me-2 d-none d-md-inline-block rounded-pill px-3 py-1 ${selectedCategory === "isTop" ? "bg-warning" : "bg-secondary"} text-dark`}>SVG</span>
              <span className="text-truncate fw-semibold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">Giochi Top</span>
            </div>
          </span>
          <span
            className={`d-flex flex-grow-1 align-items-center justify-content-center text-center border-bottom border-2 px-2 py-3 py-lg-4 ${selectedCategory === "isFeatured" ? "border-warning" : "border-secondary"} cursor-pointer`}
            onClick={() => setSelectedCategory("isFeatured")}
          >
            <div className="d-flex align-items-center justify-content-center">
              <span className={`me-2 d-none d-md-inline-block rounded-pill px-3 py-1 ${selectedCategory === "isFeatured" ? "bg-warning" : "bg-secondary"} text-light`}>SVG</span>
              <span className="text-truncate fw-semibold text-light text-lg sm:text-xl md:text-2xl lg:text-3xl">Giochi In Evidenza</span>
            </div>
          </span>
          <span
            className={`d-flex flex-grow-1 align-items-center justify-content-center text-center border-bottom border-2 px-2 py-3 py-lg-4 ${selectedCategory === "isLatest" ? "border-warning" : "border-secondary"} cursor-pointer`}
            onClick={() => setSelectedCategory("isLatest")}
          >
            <div className="d-flex align-items-center justify-content-center">
              <span className={`me-2 d-none d-md-inline-block rounded-pill px-3 py-1 ${selectedCategory === "isLatest" ? "bg-warning" : "bg-secondary"} text-light`}>SVG</span>
              <span className="text-truncate fw-semibold text-light text-lg sm:text-xl md:text-2xl lg:text-3xl">Ultimi giochi</span>
            </div>
          </span>
        </div>

        <div className="d-flex justify-content-evenly">
          {games
            .filter((game) => game[selectedCategory as keyof Game])
            .slice(0, 3)
            .map((game) => (
              <div className="col-3" key={game.id}>
                <Link to={`/products/${game.id}`}>
                  <GameCard game={game} />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
