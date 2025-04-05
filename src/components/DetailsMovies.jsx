import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import { fetchDetailsMovies } from "../api/moviesApi";
import "../CSS/details.css";
import FadeInOnScroll from "./animations/FadeInOnScroll";
import FadeUpOnScroll from "./animations/FadeUpOnScroll";
import RecommendedMovies from "./moviesList/RecommendedMovies";
import SkeletonDetailsMovies, {
  ErrorDetailsMovies,
} from "./skeletons/SkeletonDetailsMovies";
import VideosMovies from "./VideosMovies";

export default function DetailsMovies() {
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
        <FadeInOnScroll>
          <img
            className="movie__backdrop"
            src={`https://image.tmdb.org/t/p/original${
              data ? data.backdrop_path : ""
            }`}
            alt={data?.title}
          />
        </FadeInOnScroll>
      </div>

      <div className="movie__detail">
        <div className="movie__detailLeft">
          <FadeUpOnScroll delay={0.2}>
            <div className="movie__posterBox">
              <img
                className="movie__poster"
                src={`https://image.tmdb.org/t/p/original${
                  data ? data.poster_path : ""
                }`}
                alt={data?.title}
              />
            </div>
          </FadeUpOnScroll>
        </div>

        <div className="movie__detailRight">
          <FadeUpOnScroll delay={0.4}>
            <div className="movie__detailRightTop">
              <div className="movie__name">{data ? data.title : ""}</div>
              {data.tagline && (
                <div className="movie__tagline">{data.tagline}</div>
              )}
              <div className="movie__rating">
                <i className="fas fa-star" style={{ color: "#f5c518" }}></i>{" "}
                {data ? data.vote_average.toFixed(1) : ""}
                <span className="movie__voteCount">
                  {data
                    ? "(" + data.vote_count.toLocaleString() + " votes)"
                    : ""}
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
                  ? data.genres.map((genre) => (
                      <motion.div
                        key={genre.id}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span
                          key={genre.id}
                          className="movie__genre"
                          id={genre.id}
                        >
                          {genre.name}
                        </span>
                      </motion.div>
                    ))
                  : ""}
              </div>
            </div>
          </FadeUpOnScroll>

          <FadeUpOnScroll delay={0.6}>
            <div className="movie__detailRightBottom">
              <div className="synopsisText">Synopsis</div>
              <div className="movie__overview">{data ? data.overview : ""}</div>
            </div>
          </FadeUpOnScroll>
        </div>
      </div>

      <VideosMovies />
      <div style={{ marginTop: "100px" }}></div>

      <div className="movie__recommended-section">
        <RecommendedMovies />
      </div>

      <div className="movie__links">
        <FadeUpOnScroll delay={0.2}>
          <div className="movie__heading">Useful Links</div>
          <div
            style={{
              display: "flex",
              gap: "var(--spacing-md)",
              flexWrap: "wrap",
            }}
          >
            {data && data.homepage && (
              <a
                href={data.homepage}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="movie__homeButton movie__Button">
                  Homepage<i className="newTab fas fa-external-link-alt"></i>
                </p>
              </a>
            )}
            {data && data.imdb_id && (
              <a
                href={"https://www.imdb.com/title/" + data.imdb_id}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <p className="movie__imdbButton movie__Button">
                  IMDb<i className="newTab fas fa-external-link-alt"></i>
                </p>
              </a>
            )}
          </div>
        </FadeUpOnScroll>
      </div>

      {data &&
        data.production_companies &&
        data.production_companies.length > 0 && (
          <div className="movie__production-container">
            <FadeUpOnScroll delay={0.3}>
              <div className="movie__heading">Production companies</div>
              <div className="movie__production">
                {data.production_companies.map(
                  (company, index) =>
                    company.logo_path && (
                      <div key={index}>
                        <span className="productionCompanyImage">
                          <FadeInOnScroll delay={0.3 + index * 0.1}>
                            <img
                              className="movie__productionComapany"
                              src={
                                "https://image.tmdb.org/t/p/original" +
                                company.logo_path
                              }
                              alt={company.name}
                            />
                          </FadeInOnScroll>
                          <span>{company.name}</span>
                        </span>
                      </div>
                    )
                )}
              </div>
            </FadeUpOnScroll>
          </div>
        )}
    </div>
  );
}
