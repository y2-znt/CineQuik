import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { fetchTopRatedMovies } from "../../api/moviesApi";
import "../../CSS/movieList.css";
import Card from "../Card";
import {
  ErrorMovieList,
  SkeletonMovieList,
} from "../skeletons/SkeletonMovieList";

const TopRatedMovieList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });

  if (isLoading) return <SkeletonMovieList title="Top Rated" />;
  if (error)
    return <ErrorMovieList message={error.message} title="Top Rated" />;

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
          <h2 className="list__title">Top Rated Movies</h2>
          <Link to="/top-rated-movies" className="list__view-all">
            View All <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        <p className="list__subtitle">
          The highest-rated films of all time, acclaimed by critics and loved by
          audiences
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
          to="/top-rated-movies"
          className="btn btn-primary"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--spacing-xs)",
            textDecoration: "none",
          }}
        >
          Explore All Top Rated Movies <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </motion.div>
  );
};

export default TopRatedMovieList;
