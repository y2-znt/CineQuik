import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchVideosMovies } from "../api/moviesApi";
import "../CSS/details.css";
// link of library : https://www.npmjs.com/package/react-youtube
import YouTube from "react-youtube";

const VideosMovies = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["videosMovies", id],
    queryFn: () => fetchVideosMovies(id),
    onSuccess: (data) => {
      if (!data) {
        throw new Error("Query data cannot be undefined");
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching videos movies: {error.message}</div>;

  return (
    <div>
      {data &&
        data.slice(0, 4).map((video, index) => (
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
