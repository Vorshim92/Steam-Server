import React, { useEffect, useState } from "react";
import styles from "./StoreSlider.module.css";
import { Game } from "../../interfaces/types";

const StoreSlider = ({ newsData }: { newsData: Game[] }) => {
  console.log(newsData);
  const gameList = newsData.slice(0, 6);
  const [counter, setCounter] = useState(0);
  console.log(gameList);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === gameList.length - 1) return setCounter(0);
      setCounter(counter + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, [gameList.length, counter]);

  // Change current slide
  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const divElement = e.currentTarget.querySelector("div");
    const value = parseInt(divElement?.id || "0");
    if (value !== counter) setCounter(value);
  };

  return (
    <div className={styles.sliderWrapper}>
      {gameList && gameList.length > 0 && (
        <div
          className={styles.featured}
          style={{
            backgroundImage: `url(${gameList[counter]?.image_thumbnail || "storage/game_images/default_image_thumbnail.webp"})`,
          }}
        >
          <div className={styles.itemText}>
            <img src={(gameList[counter].image_title && gameList[counter].image_title) || "storage/game_images/default_image_title.png"} alt="game" />
            <h3>{gameList[counter].name}</h3>
            <div className={styles.buttons}>
              <a href="#!" className={`${styles.btn} ${styles.btnDownload}`}>
                AFFITTA SUBITO IL TUO GAME SERVER
              </a>
              <a href="#!" className={`${styles.btn} ${styles.btnWishlist}`}>
                +
              </a>
            </div>
          </div>
        </div>
      )}
      {gameList && gameList.length > 0 && (
        <ul className={styles.gamelist}>
          {gameList.map((game, index) => (
            <li key={game.id} onClick={onClick} style={{ display: "block" }}>
              <div id={index.toString()} className={`${styles.game} ${index === counter ? styles.current : ""}`}>
                <img src={game.image_vertical && game.image_vertical ? game.image_vertical : "storage/game_images/default_image_vertical.jpg"} alt="game" />
                <p className="text-white">{game.name.split(" ").slice(0, 4).join(" ")}...</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StoreSlider;
