import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import { Game } from "../interfaces/types";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import StoreSlider from "../components/Slider/StoreSlider";

const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://192.168.1.10:8000/api/v1/games");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const data: Game[] = result.data;
        setGames(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchGames();
  }, []);
  console.log(games);

  return (
    <div className="container">
      <div className="row gap-3">
        {games && <StoreSlider newsData={games} />}
        {games &&
          games.map((game) => (
            <div className="col-4" key={game.id}>
              <GameCard game={game} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
