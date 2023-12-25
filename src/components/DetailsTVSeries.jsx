import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/details.css";

const DetailsTVSeries = () => {
    
    const [tvDetail, setvDetail] = useState()
    const {id} = useParams();
    
    
    useEffect (() => {
        getData()
        window.scrollTo(0, 0)
    }, [])
    
    const getData = () => {
        axios
        .get(`https://api.themoviedb.org/3/tv/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63`)
        .then((response) => {
            setvDetail(response.data);

            })
        }
    
        return (
            <div className="media">
                <div className="media__intro">
                    <img className="media__backdrop" src={`https://image.tmdb.org/t/p/original${tvDetail ? tvDetail.backdrop_path : ""}`} />
                </div>
                <div className="media__detail">
                    <div className="media__detailLeft">
                        <div className="media__posterBox">
                            <img className="media__poster" src={`https://image.tmdb.org/t/p/original${tvDetail ? tvDetail.poster_path : ""}`} />
                        </div>
                    </div>
                    <div className="media__detailRight">
                        <div className="media__detailRightTop">
                            <div className="media__name">{tvDetail ? tvDetail.original_name  : ""}</div>
                            <div className="media__tagline">{tvDetail ? tvDetail.tagline : ""}</div>
                            <div className="media__rating">
                            ⭐ {tvDetail ? tvDetail.vote_average: ""}
                                <span className="media__voteCount">{tvDetail ? "(" + tvDetail.vote_count + ") votes" : ""}</span>
                            </div>  
                            <div className="media__runtime">{tvDetail ? tvDetail.runtime + " mins" : ""}</div>
                            <div className="media__releaseDate">{tvDetail ? "Last air date: " + tvDetail.last_air_date : ""}</div>
                            <div className="media__genres">
                                {
                                    tvDetail && tvDetail.genres
                                    ? 
                                    tvDetail.genres.map(genre => (
                                        <><span className="media__genre" id={genre.id}>{genre.name}</span></>
                                    )) 
                                    : 
                                    ""
                                }
                            </div>
                        </div>
                        <div className="media__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <div>{tvDetail ? tvDetail.overview : ""}</div>
                        </div>
                        
                    </div>
                </div>
                <div className="media__links">
                    <div className="media__heading"></div>
                    {
                        tvDetail && tvDetail.homepage && <a href={tvDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p className="media__homeButton media__Button">Homepage<i className="newTab fas fa-external-link-alt"></i></p></a>
                    }
                    {
                        tvDetail && tvDetail.imdb_id && <a href={"https://www.imdb.com/title/" + tvDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p className="media__imdbButton media__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></p></a>
                    }
                </div>
                <div className="media__heading"></div>
                <div className="media__production">
                    {
                        tvDetail && tvDetail.production_companies && tvDetail.production_companies.map(company => (
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

export default DetailsTVSeries;