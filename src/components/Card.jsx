import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/card.css";
import Skeleton from "./skeletons/SkeletonCard";

const Cards = ({ movie }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const isHighRated = movie?.vote_average >= 7.5;

  return (
    <NavLink
      to={`/details/${movie?.id}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div className="cards">
        {!isLoaded && <Skeleton />}
        <img
          className="cards__img"
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path ?? ""}`}
          alt={movie?.title || "Movie poster"}
          onLoad={() => setIsLoaded(true)}
          style={{ display: isLoaded ? "block" : "none" }}
        />

        {isLoaded && isHighRated && (
          <div className="card__badge">
            <i className="fas fa-award"></i> Top Rated
          </div>
        )}

        {isLoaded && (
          <div className="cards__overlay">
            <div className="card__title">{movie?.title || ""}</div>
            <div className="card__runtime">
              <i
                className="fas fa-calendar-alt"
                style={{ marginRight: "var(--spacing-xs)" }}
              ></i>
              {movie?.release_date || ""}
              <span className="card__rating">
                <i className="fas fa-star"></i>
                {movie?.vote_average?.toFixed(1) || ""}
              </span>
            </div>
            <div className="card__description">
              {movie?.overview
                ? movie.overview.length > 120
                  ? movie.overview.slice(0, 120) + "..."
                  : movie.overview
                : ""}
            </div>
          </div>
        )}
      </div>
    </NavLink>
  );
};

export default Cards;
