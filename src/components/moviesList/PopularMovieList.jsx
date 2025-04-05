import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fetchPopularMovies } from "../../api/moviesApi";
import "../../CSS/movieList.css";
import FadeUp from "../animations/FadeUp";
import FadeUpOnScroll from "../animations/FadeUpOnScroll";
import Card from "../Card";
import {
  ErrorMovieList,
  SkeletonMovieList,
} from "../skeletons/SkeletonMovieList";

const PopularMovieList = ({
  showViewAll = true,
  useScrollAnimation = false,
}) => {
  const [visibleMovies, setVisibleMovies] = useState(8);

  const { data, error, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  const handleLoadMore = () => {
    setVisibleMovies((prev) => prev + 8);
  };

  if (isLoading) return <SkeletonMovieList title="Popular Movies" />;
  if (error)
    return <ErrorMovieList message={error.message} title="Popular Movies" />;

  const Wrapper = useScrollAnimation ? FadeUpOnScroll : FadeUp;

  return (
    <Wrapper>
      <div className="media__list">
        <div className="list__header">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 className="list__title">Popular Movies</h2>
            {showViewAll && (
              <Link to="/popular-movies" className="list__view-all">
                View All <i className="fas fa-arrow-right"></i>
              </Link>
            )}
          </div>
          <p className="list__subtitle">
            Discover trending movies that audiences can't stop watching right
            now
          </p>
        </div>

        <div className="list__cards">
          {data &&
            data.slice(0, visibleMovies).map((movie, index) => (
              <Wrapper key={movie.id} delay={0.1 + (index % 8) * 0.1}>
                <Card movie={movie} />
              </Wrapper>
            ))}
        </div>

        {!showViewAll && data && visibleMovies < data.length && (
          <div className="list__footer" style={{ marginTop: "2rem" }}>
            <button
              onClick={handleLoadMore}
              className="btn btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--spacing-xs)",
                padding: "12px 24px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Load More
            </button>
          </div>
        )}

        {showViewAll && (
          <div className="list__footer">
            <Link
              to="/popular-movies"
              className="btn btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--spacing-xs)",
                textDecoration: "none",
              }}
            >
              Explore All Popular Movies <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default PopularMovieList;
