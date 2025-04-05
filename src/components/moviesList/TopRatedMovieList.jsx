import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTopRatedMovies } from "../../api/moviesApi";
import MovieList from "./MovieList";

export default function TopRatedMovieList({
  showViewAll = true,
  useScrollAnimation = false,
}) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });

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
