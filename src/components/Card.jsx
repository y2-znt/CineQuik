import React from "react";
import "../CSS/card.css";
import { NavLink } from "react-router-dom";

const Cards = ({ movie }) => {
  return (
    <div>
      <NavLink
        to={`/details/${movie?.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className="cards">
          <div>
            <img
              className="cards__img"
              src={`https://image.tmdb.org/t/p/original${
                movie && movie.poster_path ? movie.poster_path : ""
              }`}
              alt="media image"
            />
            <div className="cards__overlay">
              <div className="card__title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="card__runtime">
                {movie ? movie.release_date : ""}
                <span className="card__rating">
                  ⭐{movie ? movie.vote_average : ""}
                </span>
              </div>
              <div className="card__description">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Cards;
