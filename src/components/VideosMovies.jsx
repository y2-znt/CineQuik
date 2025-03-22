import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { fetchVideosMovies } from "../api/moviesApi";
import "../CSS/details.css";
import FadeOnScroll from "./animations/FadeOnScroll";
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
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <FadeOnScroll>
      <div className="movie__videos">
        <motion.div
          className="movie__heading"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Videos
        </motion.div>
        <div className="movie__videos-container">
          {data &&
            data.slice(0, 4).map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <YouTube videoId={video.key} opts={opts} />
              </motion.div>
            ))}
        </div>
      </div>
    </FadeOnScroll>
  );
};

export default VideosMovies;
