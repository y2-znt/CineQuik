import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchPopularMovies } from "../../api/moviesApi";
import "../../CSS/movieList.css";
import FadeUpOnScroll from "../animations/FadeUpOnScroll";
import Card from "../Card";
import {
  ErrorMovieList,
  SkeletonMovieList,
} from "../skeletons/SkeletonMovieList";

const PopularMovieList = ({ showViewAll = true }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  if (isLoading) return <SkeletonMovieList title="Popular Movies" />;
  if (error)
    return <ErrorMovieList message={error.message} title="Popular Movies" />;

  return (
    <FadeUpOnScroll>
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
            data.slice(0, 8).map((movie, index) => (
              <FadeUpOnScroll key={movie.id} delay={index * 0.1}>
                <Card movie={movie} />
              </FadeUpOnScroll>
            ))}
        </div>

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
    </FadeUpOnScroll>
  );
};

export default PopularMovieList;
