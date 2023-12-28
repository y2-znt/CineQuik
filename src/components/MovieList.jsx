import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/movieList.css";

const MovieList = () => {
    const [movieLists, setMovieLists] = useState({ TrendMovieList: [], RatedMovieList: [] });

    const getData = async () => {
        try {
            const trendingMovies = axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=4e44d9029b1270a757cddc766a1bcb63`);
            const topRatedMovies = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63`);
            const [trendingResponse, topRatedResponse] = await Promise.all([trendingMovies, topRatedMovies]);
            setMovieLists({ TrendMovieList: trendingResponse.data.results, RatedMovieList: topRatedResponse.data.results });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData(); // Appel initial au chargement du composant
    }, []);

    return (
        <div className="media__list">

                    <h2 className="list__title">Trending movies</h2>
                    <div className="list__cards">
                        {movieLists.TrendMovieList.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))}
                    </div>

                    <h2 className="list__title">Top rated movies</h2>
                    <div className="list__cards">
                        {movieLists.RatedMovieList.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))}
                    </div>

        </div>
    );
};

export default MovieList;
