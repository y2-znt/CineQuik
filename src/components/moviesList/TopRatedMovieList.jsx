import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopRatedMovies } from "../../api/moviesApi";
import "../../CSS/movieList.css";
import FadeUp from "../animations/FadeUp";
import FadeUpOnScroll from "../animations/FadeUpOnScroll";
import Card from "../Card";
import {
  ErrorMovieList,
  SkeletonMovieList,
} from "../skeletons/SkeletonMovieList";

const TopRatedMovieList = ({
  showViewAll = true,
  useScrollAnimation = false,
}) => {
  const [visibleMovies, setVisibleMovies] = useState(8);

  const { data, error, isLoading } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });

  const handleLoadMore = () => {
    setVisibleMovies((prev) => prev + 8);
  };

  if (isLoading) return <SkeletonMovieList title="Top Rated" />;
  if (error)
    return <ErrorMovieList message={error.message} title="Top Rated" />;

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
            <h2 className="list__title">Top Rated Movies</h2>
            {showViewAll && (
              <Link to="/top-rated-movies" className="list__view-all">
                View All <i className="fas fa-arrow-right"></i>
              </Link>
            )}
          </div>
          <p className="list__subtitle">
            The highest-rated films of all time, acclaimed by critics and loved
            by audiences
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
              to="/top-rated-movies"
              className="btn btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--spacing-xs)",
                textDecoration: "none",
              }}
            >
              Explore All Top Rated Movies{" "}
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default TopRatedMovieList;
