import { useState, useEffect } from "react";
import { Game } from "../interfaces/types";
import { Link } from "react-router-dom";
import axios from "axios";
import ClashCard from "../components/Cards/ClashCard";
const Products = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Game[]>([]);

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

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filteredGames = games.filter((game) => game.name && game.name.toLowerCase().includes(searchQuery.toLowerCase()));
      setSearchResults(filteredGames);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, games]);

  return (
    <>
      <div className="row row-gap-3 mt-5">
        <div className="col text-center text-white">
          <h1>SCEGLI IL TUO GIOCO</h1>
          <div className="position-relative">
            <input className="searchVorshim " type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Cerca" />{" "}
            {searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.map((result) => (
                  <Link key={result.id} to={`/products/${result.id}`} className="search-results-item " onClick={() => setSearchQuery("")}>
                    {result.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row row-gap-3 mt-5">{games && games.map((game) => <ClashCard game={game} key={game.id} />)}</div>
    </>
  );
};
export default Products;
