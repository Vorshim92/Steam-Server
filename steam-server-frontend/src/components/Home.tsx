import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import { Game } from "../interfaces/types";

const Home = () => {
  const [games, setGames] = useState<Game[]>([]);

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
  }, [games]);

  return (
    <div className="container">
      <div className="row gap-3">
        {games &&
          games.map((game) => (
            <div className="col-3" key={game.id}>
              <GameCard game={game} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
