import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { fetchVideosMovies } from "../api/moviesApi";
import "../CSS/details.css";
import SkeletonVideosMovies, {
  ErrorVideosMovies,
} from "./skeletons/SkeletonVideosMovies";

const VideosMovies = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["videosMovies", id],
    queryFn: () => fetchVideosMovies(id),
  });

  if (isLoading) return <SkeletonVideosMovies />;
  if (error) return <ErrorVideosMovies message={error.message} />;

  const opts = {
    height: "270",
    width: "480",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  // If no videos found
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <motion.div
      className="movie__videos"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div
        className="movie__heading"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Videos
      </motion.div>
      <div className="movie__videos-container">
        {data &&
          data.slice(0, 4).map((video, index) => (
            <motion.div
              key={video.id}
              className="video-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <YouTube videoId={video.key} opts={opts} />
              {video.name && (
                <motion.div className="video-title">
                  <i className="fas fa-play-circle video-icon"></i>
                  {video.name}
                </motion.div>
              )}
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
};

export default VideosMovies;
