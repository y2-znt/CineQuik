import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import "../CSS/details.css";

const SimilarMovies = () => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [id]);

  const getData = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=4e44d9029b1270a757cddc766a1bcb63`)
      .then((response) => {
        setSimilarMovies(response.data.results); 
      })
      .catch((error) => {
        console.error("Error fetching similar movies:", error);
      });
  };

  return (
    <div>
      <div className="movie__list">
        <h2 className="list__title">Similar Movies</h2>
        <div className="list__cards">
          {similarMovies.slice(0,10).map((movie) => (
            <Card key={movie.id} 
            movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarMovies;
