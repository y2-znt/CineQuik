import React from "react";
import { usePopularMovies } from "../../../hooks/useMovie";
import MovieList from "../MovieList";

export default function PopularMovieList({
  showViewAll = true,
  useScrollAnimation = false,
}) {
  const { data, error, isLoading } = usePopularMovies();

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
