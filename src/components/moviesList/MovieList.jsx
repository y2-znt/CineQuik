import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/movieList.css";
import FadeUp from "../animations/FadeUp";
import FadeUpOnScroll from "../animations/FadeUpOnScroll";
import Card from "../Card";
import {
  ErrorMovieList,
  SkeletonMovieList,
} from "../skeletons/SkeletonMovieList";

export default function MovieList({
  title,
  subtitle,
  linkTo,
  showViewAll = true,
  useScrollAnimation = false,
  data,
  error,
  isLoading,
  footer,
}) {
  const [visibleMovies, setVisibleMovies] = useState(8);

  const handleLoadMore = () => {
    setVisibleMovies((prev) => prev + 8);
  };

  if (isLoading) return <SkeletonMovieList title={title} />;
  if (error) return <ErrorMovieList message={error.message} title={title} />;

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
            <h2 className="list__title">{title}</h2>
            {showViewAll && (
              <Link to={linkTo} className="list__view-all">
                View All <i className="fas fa-arrow-right"></i>
              </Link>
            )}
          </div>
          <p className="list__subtitle">{subtitle}</p>
        </div>

        <div className="list__cards">
          {data &&
            data.slice(0, visibleMovies).map((movie, index) => (
              <Wrapper key={movie.id} delay={0.1 + (index % 8) * 0.1}>
                <Card movie={movie} />
              </Wrapper>
            ))}
        </div>

        <div className="list__footer">
          {footer ? (
            footer
          ) : (
            <>
              {!showViewAll && data && visibleMovies < data.length && (
                <button
                  onClick={handleLoadMore}
                  className="list__button btn btn-primary"
                >
                  Load More
                </button>
              )}

              {showViewAll && (
                <Link to={linkTo} className="list__button btn btn-primary">
                  Explore All {title} <i className="fas fa-arrow-right"></i>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
