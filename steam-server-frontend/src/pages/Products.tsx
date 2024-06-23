import { useState, useEffect } from "react";
import { Game } from "../interfaces/types";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [games, setGames] = useState<Game[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/games");
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

  return (
    <div className="container">
      <div className="row gap-3">{games && games.map((game) => <ProductCard game={game} key={game.id} />)}</div>
    </div>
  );
};
export default Products;
