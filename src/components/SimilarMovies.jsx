import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchSimilarMovies } from "../api/moviesApi";
import "../CSS/details.css";
import FadeOnScroll from "./animations/FadeOnScroll";
import Card from "./Card";
import {
  ErrorMovieList,
  SkeletonMovieList,
} from "./skeletons/SkeletonMovieList";

const SimilarMovies = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["similarMovies", id],
    queryFn: () => fetchSimilarMovies(id),
  });

  if (isLoading) return <SkeletonMovieList title="Similar Movies" />;
  if (error)
    return <ErrorMovieList message={error.message} title="Similar Movies" />;

  return (
    <div>
      <div className="movie__list">
        <h2 className="list__title">Similar Movies</h2>
        <div className="list__cards">
          {data &&
            data.slice(0, 10).map((movie, index) => (
              <FadeOnScroll key={movie.id} delay={index * 0.1}>
                <Card movie={movie} />
              </FadeOnScroll>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarMovies;
