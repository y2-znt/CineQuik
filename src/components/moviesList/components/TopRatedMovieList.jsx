import React from "react";
import { useTopRatedMovies } from "../../../hooks/useMovie";
import MovieList from "../MovieList";

export default function TopRatedMovieList({
  showViewAll = true,
  useScrollAnimation = false,
}) {
  const { data, error, isLoading } = useTopRatedMovies();

  return (
    <MovieList
      title="Top Rated Movies"
      subtitle="The highest-rated films of all time, acclaimed by critics and loved by audiences"
      linkTo="/top-rated-movies"
      showViewAll={showViewAll}
      useScrollAnimation={useScrollAnimation}
      data={data}
      error={error}
      isLoading={isLoading}
    />
  );
}
