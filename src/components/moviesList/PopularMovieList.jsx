import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { fetchPopularMovies } from "../../api/moviesApi";
import "../../CSS/movieList.css";
import Card from "../Card";
import {
  ErrorMovieList,
  SkeletonMovieList,
} from "../skeletons/SkeletonMovieList";

const PopularMovieList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  if (isLoading) return <SkeletonMovieList title="Popular Movies" />;
  if (error)
    return <ErrorMovieList message={error.message} title="Popular Movies" />;

  return (
    <motion.div
      className="media__list"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="list__header">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 className="list__title">Popular Movies</h2>
          <Link to="/popular-movies" className="list__view-all">
            View All <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        <p className="list__subtitle">
          Discover trending movies that audiences can't stop watching right now
        </p>
      </div>

      <div className="list__cards">
        {data &&
          data.slice(0, 8).map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card movie={movie} />
            </motion.div>
          ))}
      </div>

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
    </motion.div>
  );
};

export default PopularMovieList;
