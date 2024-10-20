import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/card.css";
import Skeleton from "./Skeleton";

const Cards = ({ movie }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      <NavLink
        to={`/details/${movie?.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className="cards">
          <div>
            {!isLoaded && <Skeleton />}
            <img
              className="cards__img"
              src={`https://image.tmdb.org/t/p/original${
                movie?.poster_path ?? ""
              }`}
              alt="media image"
              onLoad={() => setIsLoaded(true)}
              style={{ display: isLoaded ? "block" : "none" }}
            />
            {isLoaded && (
              <div className="cards__overlay">
                <div className="card__title">{movie?.original_title || ""}</div>
                <div className="card__runtime">
                  {movie?.release_date || ""}
                  <span className="card__rating">
                    ⭐{movie?.vote_average || ""}
                  </span>
                </div>
                <div className="card__description">
                  {movie?.overview.slice(0, 118) + "..." || ""}
                </div>
              </div>
            )}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Cards;
