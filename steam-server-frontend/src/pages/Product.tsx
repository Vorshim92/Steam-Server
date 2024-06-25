import { useState, useEffect } from "react";
import { Game } from "../interfaces/types";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Product = () => {
  const [game, setGame] = useState<Game>();
  const { id } = useParams();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/games/" + id);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const data: Game = result.data;
        setGame(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      {game && (
        <div className="container">
          <div className="row row-gap-3 mt-5">
            <div className="col text-center text-white">
              <h1>{game.name}</h1>
            </div>
          </div>
          <div className="row row-gap-3 mt-5">
            <ProductCard game={game} />
          </div>
        </div>
      )}
    </>
  );
};
export default Product;
