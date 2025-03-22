import { motion } from "motion/react";
import React from "react";
import "../../CSS/details.css";
import { SkeletonMovieList } from "./SkeletonMovieList";

const SkeletonDetailsMovies = () => {
  const pulseAnimation = {
    opacity: [0.6, 0.8, 0.6],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
    },
  };

  return (
    <div className="movie">
      <div className="movie__backBtn">
        <motion.span
          animate={pulseAnimation}
          className="skeleton-back-btn"
        ></motion.span>
      </div>
      <div className="movie__intro">
        <motion.div
          className="skeleton-backdrop"
          animate={pulseAnimation}
        ></motion.div>
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <motion.div
              className="skeleton-poster-detail"
              animate={pulseAnimation}
            ></motion.div>
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <motion.div
              className="skeleton-name"
              animate={pulseAnimation}
            ></motion.div>
            <motion.div
              className="skeleton-tagline"
              animate={pulseAnimation}
            ></motion.div>
            <motion.div
              className="skeleton-rating"
              animate={pulseAnimation}
            ></motion.div>
            <motion.div
              className="skeleton-runtime"
              animate={pulseAnimation}
            ></motion.div>
            <motion.div
              className="skeleton-release-date"
              animate={pulseAnimation}
            ></motion.div>
            <div className="skeleton-genres">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <motion.div
                    key={index}
                    className="skeleton-genre"
                    animate={pulseAnimation}
                  ></motion.div>
                ))}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <motion.div
              className="skeleton-synopsis-title"
              animate={pulseAnimation}
            ></motion.div>
            <motion.div
              className="skeleton-synopsis"
              animate={pulseAnimation}
            ></motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="skeleton-videos"
        animate={pulseAnimation}
      ></motion.div>

      <SkeletonMovieList />

      <div className="movie__production skeleton-production">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <motion.div
              key={index}
              className="skeleton-production-company"
              animate={pulseAnimation}
            ></motion.div>
          ))}
      </div>
    </div>
  );
};

export const ErrorDetailsMovies = ({ message }) => {
  return (
    <div className="movie">
      <div className="movie__backBtn">
        <span>
          <i className="fas fa-arrow-left"></i>
        </span>
      </div>
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

export default SkeletonDetailsMovies;
