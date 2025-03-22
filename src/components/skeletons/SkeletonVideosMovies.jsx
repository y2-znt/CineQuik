import { motion } from "motion/react";
import React from "react";
import "../../CSS/details.css";

const SkeletonVideosMovies = () => {
  const pulseAnimation = {
    opacity: [0.6, 0.8, 0.6],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
    },
  };

  return (
    <div className="movie__videos">
      <motion.div
        className="skeleton-heading"
        animate={pulseAnimation}
      ></motion.div>
      <div className="skeleton-videos-container">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <motion.div
              key={index}
              className="skeleton-video"
              animate={pulseAnimation}
            ></motion.div>
          ))}
      </div>
    </div>
  );
};

export const ErrorVideosMovies = ({ message }) => {
  return (
    <div className="movie__videos">
      <div className="movie__heading">Videos</div>
      <motion.div
        className="details-error"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Une erreur est survenue</h3>
        <p>{message}</p>
      </motion.div>
    </div>
  );
};

export default SkeletonVideosMovies;
