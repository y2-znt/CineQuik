import React, { useState, useEffect } from "react";
import "../CSS/home.css";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DataFetcher = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63"
      )
      .then((response) => {
        setPopularMovies(response.data.results);
      });
  }, []);

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoplay={true}
        transitionTime={1000}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie, index) => (
          <div key={index}>
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
                {movie ? movie.original_title : ""}
              </div>
              <div className="posterImage__runtime">
                {movie ? movie.release_date : ""}
                <p className="posterImage__raiting">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />{" "}
                </p>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DataFetcher;
