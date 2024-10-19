import { useQuery } from "@tanstack/react-query";
import React from "react";
import "../CSS/movieList.css";

import { fetchPopularMovies } from "../api/fetchPopularMovies";
import Card from "./Card";

const MovieList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching popular movies: {error.message}</div>;

  return (
    <div className="movie__list">
      <h2 className="list__title">Popular Movies</h2>
      <div className="list__cards">
        {data && data.map((movie) => <Card key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
