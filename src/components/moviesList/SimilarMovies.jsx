import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import { fetchSimilarMovies } from "../../api/moviesApi";
import "../../CSS/movieList.css";
import Card from "../Card";
import {
  ErrorMovieList,
  SkeletonMovieList,
} from "../skeletons/SkeletonMovieList";

const SimilarMovies = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["similarMovies", id],
    queryFn: () => fetchSimilarMovies(id),
    enabled: !!id,
  });

  if (isLoading) return <SkeletonMovieList title="Similar Movies" />;
  if (error)
    return <ErrorMovieList message={error.message} title="Similar Movies" />;
  if (!data || data.length === 0) return null;

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
          <h2 className="list__title">Similar Movies</h2>
        </div>
        <p className="list__subtitle">
          Movies you might enjoy if you liked this one
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
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "var(--font-size-sm)",
            textDecoration: "none",
          }}
        >
          These recommendations are based on genre, cast, and themes
        </p>
      </div>
    </motion.div>
  );
};

export default SimilarMovies;
