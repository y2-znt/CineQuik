import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/movieList.css";
const TVList = () => {
    const [TrendTVList, setTrendTVList] = useState([]);
    const [RatedTVSeries, setRatedTVSeries] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData(); // Appel initial au chargement du composant
    }, [type]); // Déclenche getData() chaque fois que 'type' change

    const getData = () => {
        axios
            .get(`https://api.themoviedb.org/3/trending/tv/day?api_key=4e44d9029b1270a757cddc766a1bcb63`)
            .then((response) => {
                setTrendTVList(response.data.results);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

            axios
            .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63`)
            .then((response) => {
                setRatedTVSeries(response.data.results);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    

    return (
        <div className="media__list">
          <div>
            <h2 className="list__title">Trending TV Series</h2>
            <div className="list__cards">
              {TrendTVList.map((tv) => (
                <Card key={tv.id} tv={tv} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="list__title">Top rated TV Series</h2>
            <div className="list__cards">
              {RatedTVSeries.map((tv) => (
                <Card key={tv.id} tv={tv} />
              ))}
            </div>
          </div>
        </div>
      );
    }

export default TVList;
