import React from "react";
import "../../CSS/movieList.css";
import SkeletonCard from "./SkeletonCard";

export const SkeletonMovieList = ({ title = "Loading Movies" }) => {
  return (
    <div className="movie__list"> 
      <h2 className="list__title">{title}</h2>
      <div className="list__cards__skeleton">
        {Array(10).fill(0).map((_, index) => (
          <SkeletonCard key={`skeleton-${index}`} />
        ))}
      </div>
    </div>
  );
};

export const ErrorMovieList = ({ message, title = "Movie List" }) => {
  return (
    <div className="movie__list">
      <h2 className="list__title">{title}</h2>
      <div className="list__cards__skeleton">
        <div className="movie-list-error">
          <h3>Une erreur est survenue</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};