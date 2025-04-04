import { useQuery } from "@tanstack/react-query";
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
import FadeInOnScroll from "./animations/FadeInOnScroll";
import FadeUpOnScroll from "./animations/FadeUpOnScroll";
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
              <div className="posterImage">
                <FadeInOnScroll>
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                    alt={`${
                      movie?.title || movie?.original_name || "Movie"
                    } Poster`}
                    loading="lazy"
                    style={{ opacity: 0.8 }}
                  />
                </FadeInOnScroll>
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__content">
                  <FadeUpOnScroll delay={0.4}>
                    <div className="posterImage__title">
                      {movie ? movie.title || movie.original_name : ""}
                    </div>
                  </FadeUpOnScroll>

                  <FadeUpOnScroll delay={0.5}>
                    <div className="posterImage__runtime">
                      <span>
                        <i
                          className="fas fa-calendar-alt"
                          style={{ marginRight: "var(--spacing-xs)" }}
                        ></i>
                        {movie
                          ? movie.release_date || movie.first_air_date
                          : ""}
                      </span>
                      <span className="posterImage__raiting">
                        <i className="fas fa-star"></i>
                        {movie ? movie.vote_average.toFixed(1) : ""}
                      </span>
                    </div>
                  </FadeUpOnScroll>

                  {movie && movie.genres && (
                    <FadeUpOnScroll delay={0.6}>
                      <div className="posterImage__genres">
                        {movie.genres.slice(0, 4).map((genre, idx) => (
                          <span key={idx} className="posterImage__genre">
                            {genre.name}
                          </span>
                        ))}
                      </div>
                    </FadeUpOnScroll>
                  )}

                  <FadeUpOnScroll delay={0.7}>
                    <div className="posterImage__description">
                      {movie ? movie.overview : ""}
                    </div>
                  </FadeUpOnScroll>

                  <FadeUpOnScroll delay={0.9}>
                    <div className="posterImage__buttons">
                      <Link
                        to={`/details/${movie?.id}`}
                        className="posterImage__detailButton"
                      >
                        <i className="fas fa-film"></i>
                        <span>See More</span>
                      </Link>
                      <Link
                        to="/top-rated-movies"
                        className="posterImage__secondaryButton"
                      >
                        <i className="fas fa-award"></i>
                        <span>Top Rated</span>
                      </Link>
                    </div>
                  </FadeUpOnScroll>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
