import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchPopularMovies } from "../../api/moviesApi";
import MovieList from "./MovieList";

export default function PopularMovieList({
  showViewAll = true,
  useScrollAnimation = false,
}) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  return (
    <MovieList
      title="Popular Movies"
      subtitle="Discover trending movies that audiences can't stop watching right now"
      linkTo="/popular-movies"
      showViewAll={showViewAll}
      useScrollAnimation={useScrollAnimation}
      data={data}
      error={error}
      isLoading={isLoading}
    />
  );
}
