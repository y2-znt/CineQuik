import React from "react";
import "../CSS/carousel.css";

// link of library : https://swiperjs.com/
// Swiper Modules version 10
import { useQuery } from "@tanstack/react-query";
import "swiper/css/bundle";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchCarouselMovies } from "../api/moviesApi";
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
        modules={[Autoplay, Navigation, Pagination, Keyboard]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
      >
        {data &&
          data.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt={`Movie Poster ${index}`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title || movie.original_name : ""}
                </div>

                <div className="posterImage__runtime">
                  {movie ? movie.release_date || movie.first_air_date : ""}
                  <span className="posterImage__raiting">
                    ⭐{movie ? movie.vote_average : ""}
                  </span>
                  <div className="posterImage__description">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
