import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";
import "swiper/css/bundle";
import {
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchCarouselMovies } from "../api/moviesApi";
import "../CSS/carousel.css";
import { ErrorCarousel, SkeletonCarousel } from "./skeletons/SkeletonCarousel";

const Carousel = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["carouselMovies"],
    queryFn: fetchCarouselMovies,
  });

  if (isLoading) return <SkeletonCarousel />;
  if (error) return <ErrorCarousel message={error.message} />;

  return (
    <div className="poster">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Keyboard, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        keyboard={{ enabled: true }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={800}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
      >
        {data &&
          data.map((movie, index) => (
            <SwiperSlide key={index}>
              <motion.div className="posterImage">
                <motion.img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt={`${
                    movie?.title || movie?.original_name || "Movie"
                  } Poster`}
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              <motion.div
                className="posterImage__overlay"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="posterImage__content">
                  <motion.div
                    className="posterImage__title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {movie ? movie.title || movie.original_name : ""}
                  </motion.div>
                  <motion.div
                    className="posterImage__runtime"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <span>
                      <i
                        className="fas fa-calendar-alt"
                        style={{ marginRight: "var(--spacing-xs)" }}
                      ></i>
                      {movie ? movie.release_date || movie.first_air_date : ""}
                    </span>
                    <span className="posterImage__raiting">
                      <i className="fas fa-star"></i>
                      {movie ? movie.vote_average.toFixed(1) : ""}
                    </span>
                  </motion.div>

                  {movie && movie.genres && (
                    <motion.div
                      className="posterImage__genres"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {movie.genres.slice(0, 4).map((genre, idx) => (
                        <span key={idx} className="posterImage__genre">
                          {genre.name}
                        </span>
                      ))}
                    </motion.div>
                  )}

                  <motion.div
                    className="posterImage__description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {movie ? movie.overview : ""}
                  </motion.div>

                  <motion.div
                    className="posterImage__buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <Link
                      to={`/details/${movie?.id}`}
                      className="posterImage__detailButton"
                    >
                      <i className="fas fa-info-circle"></i>
                      <span>See More</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
