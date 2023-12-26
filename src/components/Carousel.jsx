import React, { useState, useEffect } from "react";
import "../CSS/carousel.css";
import axios from "axios";

// Swiper Modules version 10
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css/bundle';

const DataFetcher = () => {
  const [carouselMovies, setCarouselMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=4e44d9029b1270a757cddc766a1bcb63"
      )
      .then((response) => {
        setCarouselMovies(response.data.results);
      });
  }, []);

  return (
    <div className="poster">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Keyboard]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        keyboard={{enabled: true,}}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {carouselMovies.map((movie, index) => (
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
              <div className="posterImage__mediatype">
                {movie
                  ? movie.media_type === "tv"
                    ? "TV Serie"
                    : movie.media_type === "movie"
                    ? "Movie"
                    : movie.media_type
                  : ""}
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

export default DataFetcher;
