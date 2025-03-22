import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDetailsMovies } from "../api/moviesApi";
import "../CSS/details.css";
import FadeOnScroll from "./animations/FadeOnScroll";
import SimilarMovies from "./moviesList/SimilarMovies";
import SkeletonDetailsMovies, {
  ErrorDetailsMovies,
} from "./skeletons/SkeletonDetailsMovies";
import VideosMovies from "./VideosMovies";

const DetailsMovies = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["detailsMovies", id],
    queryFn: () => fetchDetailsMovies(id),
  });

  const goBack = () => {
    navigate(-1);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  if (isLoading) return <SkeletonDetailsMovies />;
  if (error) return <ErrorDetailsMovies message={error.message} />;

  return (
    <div className="movie">
      <div className="movie__backBtn">
        <span onClick={goBack}>
          <i className="fas fa-arrow-left"></i>
        </span>
      </div>

      <div className="movie__intro">
        <FadeOnScroll>
          <img
            className="movie__backdrop"
            src={`https://image.tmdb.org/t/p/original${
              data ? data.backdrop_path : ""
            }`}
          />
        </FadeOnScroll>
      </div>

      <div className="movie__detail">
        <div className="movie__detailLeft">
          <FadeOnScroll delay={0.4}>
            <div className="movie__posterBox">
              <motion.img
                className="movie__poster"
                src={`https://image.tmdb.org/t/p/original${
                  data ? data.poster_path : ""
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </FadeOnScroll>
        </div>

        <div className="movie__detailRight">
          <FadeOnScroll delay={0.6}>
            <div className="movie__detailRightTop">
              <div className="movie__name">
                {data ? data.original_title : ""}
              </div>
              <div className="movie__tagline">{data ? data.tagline : ""}</div>
              <div className="movie__rating">
                ⭐ {data ? data.vote_average : ""}
                <span className="movie__voteCount">
                  {data ? "(" + data.vote_count + ") votes" : ""}
                </span>
              </div>
              <div className="movie__runtime">
                {data ? data.runtime + " mins" : ""}
              </div>
              <div className="movie__releaseDate">
                {data ? "Release date: " + data.release_date : ""}
              </div>
              <div className="movie__genres">
                {data && data.genres
                  ? data.genres.map((genre, index) => (
                      <div key={index}>
                        <span className="movie__genre" id={genre.id}>
                          {genre.name}
                        </span>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </FadeOnScroll>

          <div className="movie__detailRightBottom">
            <FadeOnScroll delay={0.8}>
              <div className="synopsisText">Synopsis</div>
              <div>{data ? data.overview : ""}</div>
            </FadeOnScroll>
          </div>
        </div>
      </div>

      <VideosMovies />
      <SimilarMovies />

      <FadeOnScroll>
        <div className="movie__links">
          <div className="movie__heading">Useful Links</div>
          {data && data.homepage && (
            <motion.a
              href={data.homepage}
              target="_blank"
              style={{ textDecoration: "none" }}
              whileHover={{ scale: 1.05 }}
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
            >
              <p className="movie__imdbButton movie__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </p>
            </motion.a>
          )}
        </div>
      </FadeOnScroll>

      <FadeOnScroll>
        <div className="movie__heading">Production companies</div>
        <div className="movie__production">
          {data &&
            data.production_companies &&
            data.production_companies.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {company.logo_path && (
                  <span className="productionCompanyImage">
                    <img
                      className="movie__productionComapany"
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        company.logo_path
                      }
                    />
                    <span>{company.name}</span>
                  </span>
                )}
              </motion.div>
            ))}
        </div>
      </FadeOnScroll>
    </div>
  );
};

export default DetailsMovies;
