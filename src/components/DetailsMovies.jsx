import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import "../CSS/details.css";

const DetailsMovies = () => {

    const [movieDetail, setMovieDetail] = useState([])
    const [similarMovies, setSimilarMovies] = useState([])
    const {id} = useParams();

    console.log({id});
    useEffect (() => {
        getData()
        window.scrollTo(0, 0)
    }, [])
    
    const getData = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63`)
            .then((response) => {
                setMovieDetail(response.data);
            })
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=4e44d9029b1270a757cddc766a1bcb63`)
            .then((response) => {
                setSimilarMovies(response.data);
            })



        }
    
        return (
            <div className="media">
                <div className="media__backBtn">
                <NavLink to="/Home">
                    <i className="fas fa-arrow-left"></i>
                </NavLink>
                </div>
                <div className="media__intro">
                    <img className="media__backdrop" src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.backdrop_path : ""}`} />
                </div>
                <div className="media__detail">
                    <div className="media__detailLeft">
                        <div className="media__posterBox">
                            <img className="media__poster" src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ""}`} />
                        </div>
                    </div>
                    <div className="media__detailRight">
                        <div className="media__detailRightTop">
                            <div className="media__name">{movieDetail ? movieDetail.original_title : ""}</div>
                            <div className="media__tagline">{movieDetail ? movieDetail.tagline : ""}</div>
                            <div className="media__rating">
                            ⭐ {movieDetail ? movieDetail.vote_average: ""}
                                <span className="media__voteCount">{movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}</span>
                            </div>  
                            <div className="media__runtime">{movieDetail ? movieDetail.runtime + " mins" : ""}</div>
                            <div className="media__releaseDate">{movieDetail ? "Release date: " + movieDetail.release_date : ""}</div>
                            <div className="media__genres">
                                {
                                    movieDetail && movieDetail.genres
                                    ? 
                                    movieDetail.genres.map(genre => (
                                        <><span className="media__genre" id={genre.id}>{genre.name}</span></>
                                    )) 
                                    : 
                                    ""
                                }
                            </div>
                        </div>
                        <div className="media__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <div>{movieDetail ? movieDetail.overview : ""}</div>
                        </div>
                        
                    </div>
                </div>
                <h2 className="list__title">Similar movies</h2>
                    <div className="list__cards">
                        {/* {similarMovies.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))} */}
                    </div>
                <div className="media__links">
                    <div className="media__heading">Useful Links</div>
                    {
                        movieDetail && movieDetail.homepage && <a href={movieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p className="media__homeButton media__Button">Homepage<i className="newTab fas fa-external-link-alt"></i></p></a>
                    }
                    {
                        movieDetail && movieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + movieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p className="media__imdbButton media__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></p></a>
                    }
                </div>
                <div className="media__heading">Production companies</div>
                <div className="media__production">
                    {
                        movieDetail && movieDetail.production_companies && movieDetail.production_companies.map(company => (
                            <>
                                {
                                    company.logo_path 
                                    && 
                                    <span className="productionCompanyImage">
                                        <img className="media__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                        <span>{company.name}</span>
                                    </span>
                                }
                            </>
                        ))
                    }
                </div>
            </div>
        )
        };

export default DetailsMovies;