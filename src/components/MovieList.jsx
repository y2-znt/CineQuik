import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/movieList.css";

const MovieList = () => {
    const [TrendMovieList, setTrendMovieList] = useState([]);
    const [RatedMovieList, setRatedMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData(); // Appel initial au chargement du composant
    }, [type]); // Déclenche getData() chaque fois que 'type' change

    const getData = () => {
        axios
            .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=4e44d9029b1270a757cddc766a1bcb63`)
            .then((response) => {
                setTrendMovieList(response.data.results);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        axios
            .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63`)
            .then((response) => {
                setRatedMovieList(response.data.results);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    return (
        <div className="movie__list">
            <div>
            <h2 className="list__title">Trending movies</h2>
            <div className="list__cards">
                {TrendMovieList.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
            </div>
            <div>
            <h2 className="list__title">Top rated movies</h2>
            <div className="list__cards">
              {RatedMovieList.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
              </div>
            </div>
        </div>
    );
};

export default MovieList;
