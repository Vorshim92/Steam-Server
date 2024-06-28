import { useState, useEffect } from "react";
import { Game } from "../interfaces/types";
import ProductCard from "../components/Cards/ProductCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import FalloutCard from "../components/Cards/FalloutCard";
const Product = () => {
  const [game, setGame] = useState<Game>();
  const { id } = useParams();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("/api/v1/games/" + id);
        const data: Game = response.data.data;
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
        <>
          <div className="row row-gap-3 mt-5">
            <div className="col text-center text-white">
              <h1>{game.name}</h1>
            </div>
          </div>
          <div className="row row-gap-3 mt-5">{game.services && game.services.map((service) => <FalloutCard key={service.id} service={service} />)}</div>
        </>
      )}
    </>
  );
};
export default Product;
