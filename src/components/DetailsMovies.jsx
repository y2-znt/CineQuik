import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import { fetchDetailsMovies } from "../api/moviesApi";
import "../CSS/details.css";
import SimilarMovies from "./moviesList/SimilarMovies";
import SkeletonDetailsMovies, {
  ErrorDetailsMovies,
} from "./skeletons/SkeletonDetailsMovies";
import VideosMovies from "./VideosMovies";

const DetailsMovies = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["detailsMovies", id],
    queryFn: () => fetchDetailsMovies(id),
  });

  if (isLoading) return <SkeletonDetailsMovies />;
  if (error) return <ErrorDetailsMovies message={error.message} />;

  return (
    <div className="movie">
      <div className="movie__intro">
        <motion.img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            data ? data.backdrop_path : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <div className="movie__detail">
        <div className="movie__detailLeft">
          <motion.div
            className="movie__posterBox"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                data ? data.poster_path : ""
              }`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>
        </div>

        <div className="movie__detailRight">
          <motion.div
            className="movie__detailRightTop"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="movie__name">{data ? data.title : ""}</div>
            {data.tagline && (
              <div className="movie__tagline">{data.tagline}</div>
            )}
            <div className="movie__rating">
              <i className="fas fa-star" style={{ color: "#f5c518" }}></i>{" "}
              {data ? data.vote_average.toFixed(1) : ""}
              <span className="movie__voteCount">
                {data ? "(" + data.vote_count.toLocaleString() + " votes)" : ""}
              </span>
            </div>
            <div className="movie__runtime">
              <i className="fas fa-clock" style={{ marginRight: "8px" }}></i>
              {data && data.runtime
                ? `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`
                : ""}
            </div>
            <div className="movie__releaseDate">
              <i
                className="fas fa-calendar-alt"
                style={{ marginRight: "8px" }}
              ></i>
              {data ? data.release_date : ""}
            </div>
            <div className="movie__genres">
              {data && data.genres
                ? data.genres.map((genre, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </motion.div>
                  ))
                : ""}
            </div>
          </motion.div>

          <motion.div
            className="movie__detailRightBottom"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="synopsisText">Synopsis</div>
            <div className="movie__overview">{data ? data.overview : ""}</div>
          </motion.div>
        </div>
      </div>

      <VideosMovies />
      <div style={{ marginTop: "100px" }}></div>
      <SimilarMovies />

      <motion.div
        className="movie__links"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="movie__heading">Useful Links</div>
        <div
          style={{
            display: "flex",
            gap: "var(--spacing-md)",
            flexWrap: "wrap",
          }}
        >
          {data && data.homepage && (
            <motion.a
              href={data.homepage}
              target="_blank"
              style={{ textDecoration: "none" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="movie__homeButton movie__Button">
                Homepage<i className="newTab fas fa-external-link-alt"></i>
              </p>
            </motion.a>
          )}
          {data && data.imdb_id && (
            <motion.a
              href={"https://www.imdb.com/title/" + data.imdb_id}
              target="_blank"
              style={{ textDecoration: "none" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p className="movie__imdbButton movie__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </p>
            </motion.a>
          )}
        </div>
      </motion.div>

      {data &&
        data.production_companies &&
        data.production_companies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ width: "85%" }}
          >
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
              {data.production_companies.map(
                (company, index) =>
                  company.logo_path && (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="productionCompanyImage">
                        <motion.img
                          className="movie__productionComapany"
                          src={
                            "https://image.tmdb.org/t/p/original" +
                            company.logo_path
                          }
                          alt={company.name}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.3 + index * 0.1,
                          }}
                        />
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.5 + index * 0.1,
                          }}
                        >
                          {company.name}
                        </motion.span>
                      </span>
                    </motion.div>
                  )
              )}
            </div>
          </motion.div>
        )}
    </div>
  );
};

export default DetailsMovies;
