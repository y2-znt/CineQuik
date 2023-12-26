import React, { useEffect, useState } from "react";
import "../CSS/card.css";
import { NavLink } from "react-router-dom";

const Cards = ({ movie, tv }) => {

  return (
    <div>
  
        <NavLink
          to={`/details/${movie?.id || tv?.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">

              <div>
                <img
                  className="cards__img"
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.poster_path
                      ? movie.poster_path
                      : tv && tv.poster_path
                      ? tv.poster_path
                      : ""
                  }`}
                  alt="media image"
                />
                <div className="cards__overlay">
                  <div className="card__title">
                    {movie
                      ? movie.original_title
                      : tv
                      ? tv.original_name
                      : ""}
                  </div>
                  <div className="card__runtime">
                    {movie
                      ? movie.release_date
                      : tv
                      ? tv.first_air_date
                      : ""}
                    <span className="card__rating">
                    ⭐ 
                      {movie
                        ? movie.vote_average
                        : tv
                        ? tv.vote_average
                        : ""}
                    </span>
                  </div>
                  <div className="card__description">
                    {movie
                      ? movie.overview.slice(0, 118) + "..."
                      : tv
                      ? tv.overview.slice(0, 118) + "..."
                      : ""}
                  </div>
                </div>
              </div>
          </div>
        </NavLink>
      
    </div>
  );
};

export default Cards;
