import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import YouTube from "react-youtube";
import "../CSS/details.css";

const VideosMovies = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [id]);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&append_to_response=videos`
      )
      .then((response) => {
        const YoutubeVideo = response.data;
        if (YoutubeVideo.videos && YoutubeVideo.videos.results) {
          setVideos(YoutubeVideo.videos.results);
        }
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  };

  return (
    <div>
      {videos.slice(0, 4).map((video, index) => (
        <div key={index}>
          <div className="video__container">
            <h2 className="video__title">{video.name}</h2>
            <div className="video">
            <YouTube
              videoId={video.key}
              opts={{
                width: "100%",
                height: "500px",
                
              }}
            />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideosMovies;
