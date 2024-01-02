import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import "../CSS/movieList.css";

const TopRatedMovieList = () => {
  const [movieLists, setMovieLists] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63"
      )
      .then((response) => {
        setMovieLists(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching top rated movies:", error);
      });
  }, []);

  return (
    <div className="media__list">
      <h2 className="list__title">Top rated</h2>
      <div className="list__cards">
        {movieLists.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovieList;
