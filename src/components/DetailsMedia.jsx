import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/details.css";

const DetailsMedia = () => {
    
    const [mediaDetail, setMediaDetail] = useState()
    const {id} = useParams();

    useEffect (() => {
        getData()
        window.scrollTo(0, 0)
    }, [])
    
    const getData = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63`)
            .then((response) => {
                setMediaDetail(response.data);
            })
        }
    
        return (
            <div className="media">
                <div className="media__intro">
                    <img className="media__backdrop" src={`https://image.tmdb.org/t/p/original${mediaDetail ? mediaDetail.backdrop_path : ""}`} />
                </div>
                <div className="media__detail">
                    <div className="media__detailLeft">
                        <div className="media__posterBox">
                            <img className="media__poster" src={`https://image.tmdb.org/t/p/original${mediaDetail ? mediaDetail.poster_path : ""}`} />
                        </div>
                    </div>
                    <div className="media__detailRight">
                        <div className="media__detailRightTop">
                            <div className="media__name">{mediaDetail ? mediaDetail.original_title : ""}</div>
                            <div className="media__tagline">{mediaDetail ? mediaDetail.tagline : ""}</div>
                            <div className="media__rating">
                            ⭐ {mediaDetail ? mediaDetail.vote_average: ""}
                                <span className="media__voteCount">{mediaDetail ? "(" + mediaDetail.vote_count + ") votes" : ""}</span>
                            </div>  
                            <div className="media__runtime">{mediaDetail ? mediaDetail.runtime + " mins" : ""}</div>
                            <div className="media__releaseDate">{mediaDetail ? "Release date: " + mediaDetail.release_date : ""}</div>
                            <div className="media__genres">
                                {
                                    mediaDetail && mediaDetail.genres
                                    ? 
                                    mediaDetail.genres.map(genre => (
                                        <><span className="media__genre" id={genre.id}>{genre.name}</span></>
                                    )) 
                                    : 
                                    ""
                                }
                            </div>
                        </div>
                        <div className="media__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <div>{mediaDetail ? mediaDetail.overview : ""}</div>
                        </div>
                        
                    </div>
                </div>
                <div className="media__links">
                    <div className="media__heading">Useful Links</div>
                    {
                        mediaDetail && mediaDetail.homepage && <a href={mediaDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p className="media__homeButton media__Button">Homepage<i className="newTab fas fa-external-link-alt"></i></p></a>
                    }
                    {
                        mediaDetail && mediaDetail.imdb_id && <a href={"https://www.imdb.com/title/" + mediaDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p className="media__imdbButton media__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></p></a>
                    }
                </div>
                <div className="media__heading">Production companies</div>
                <div className="media__production">
                    {
                        mediaDetail && mediaDetail.production_companies && mediaDetail.production_companies.map(company => (
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

export default DetailsMedia;