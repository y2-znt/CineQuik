import { motion } from "motion/react";
import FadeInOnScroll from "../../animations/FadeInOnScroll";
import FadeUpOnScroll from "../../animations/FadeUpOnScroll";
import MovieMetadata from "./MovieMetadata";
export default function MovieHeader({ movie }) {
  const {
    backdrop_path,
    poster_path,
    title,
    tagline,
    vote_average,
    vote_count,
    runtime,
    release_date,
    genres,
    overview,
  } = movie;

  return (
    <>
      <div className="movie__intro">
        <FadeInOnScroll>
          <img
            className="movie__backdrop"
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt={title}
          />
        </FadeInOnScroll>
      </div>

      <div className="movie__detail">
        <div className="movie__detailLeft">
          <FadeUpOnScroll delay={0.2}>
            <div className="movie__posterBox">
              <img
                className="movie__poster"
                src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
                alt={title}
              />
            </div>
          </FadeUpOnScroll>
        </div>

        <div className="movie__detailRight">
          <FadeUpOnScroll delay={0.4}>
            <div className="movie__detailRightTop">
              <div className="movie__name">{title}</div>
              {tagline && <div className="movie__tagline">{tagline}</div>}
              <MovieMetadata
                rating={vote_average}
                voteCount={vote_count}
                runtime={runtime}
                releaseDate={release_date}
              />
              <div className="movie__genres">
                {genres.map((genre) => (
                  <motion.div
                    key={genre.id}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="movie__genre" id={genre.id}>
                      {genre.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUpOnScroll>

          <FadeUpOnScroll delay={0.6}>
            <div className="movie__detailRightBottom">
              <div className="synopsisText">Synopsis</div>
              <div className="movie__overview">{overview}</div>
            </div>
          </FadeUpOnScroll>
        </div>
      </div>
    </>
  );
}
