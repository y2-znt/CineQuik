import { motion } from "motion/react";
import React from "react";
import "../../css/details.css";
import { SkeletonMovieList } from "./SkeletonMovieList";
import SkeletonVideosMovies from "./SkeletonVideosMovies";

const SkeletonDetailsMovies = () => {
  const pulseAnimation = {
    opacity: [0.5, 0.8, 0.5],
    transition: {
      repeat: Infinity,
      duration: 1.8,
      ease: "easeInOut",
    },
  };

  const shimmerAnimation = {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      repeat: Infinity,
      duration: 2.5,
      ease: "linear",
    },
  };

  const shimmerStyle = {
    backgroundImage:
      "linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%)",
    backgroundSize: "00% 100%",
    borderRadius: "inherit",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <div className="movie">
      <div className="movie__intro">
        <div className="skeleton-backdrop"></div>
      </div>
      <div className="skeleton-movie-detail">
        <div className="skeleton-detail-left">
          <div className="movie__posterBox">
            <motion.div
              className="skeleton-poster-detail"
              animate={pulseAnimation}
            >
              <motion.div style={shimmerStyle} animate={shimmerAnimation} />
            </motion.div>
          </div>
        </div>
        <div className="skeleton-detail-right">
          <div className="movie__detailRightTop">
            <motion.div className="skeleton-name" animate={pulseAnimation}>
              <motion.div style={shimmerStyle} animate={shimmerAnimation} />
            </motion.div>
            <motion.div className="skeleton-tagline" animate={pulseAnimation}>
              <motion.div style={shimmerStyle} animate={shimmerAnimation} />
            </motion.div>
            <div className="skeleton-meta">
              <motion.div className="skeleton-rating" animate={pulseAnimation}>
                <motion.div style={shimmerStyle} animate={shimmerAnimation} />
              </motion.div>
              <motion.div className="skeleton-runtime" animate={pulseAnimation}>
                <motion.div style={shimmerStyle} animate={shimmerAnimation} />
              </motion.div>
              <motion.div
                className="skeleton-release-date"
                animate={pulseAnimation}
              >
                <motion.div style={shimmerStyle} animate={shimmerAnimation} />
              </motion.div>
            </div>
            <div className="skeleton-genres">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <motion.div
                    key={index}
                    className="skeleton-genre"
                    animate={pulseAnimation}
                  >
                    <motion.div
                      style={shimmerStyle}
                      animate={shimmerAnimation}
                    />
                  </motion.div>
                ))}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <motion.div
              className="skeleton-synopsis-title"
              animate={pulseAnimation}
            >
              <motion.div style={shimmerStyle} animate={shimmerAnimation} />
            </motion.div>
            <motion.div className="skeleton-synopsis" animate={pulseAnimation}>
              <motion.div style={shimmerStyle} animate={shimmerAnimation} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Skeleton Videos Section */}
      <div className="skeleton-videos">
        <SkeletonVideosMovies />
      </div>

      <div style={{ marginTop: "100px" }}></div>
      <SkeletonMovieList />

      {/* Useful Links Section */}
      <div className="skeleton-links">
        <motion.div className="skeleton-links-title" animate={pulseAnimation}>
          <motion.div style={shimmerStyle} animate={shimmerAnimation} />
        </motion.div>

        <div className="skeleton-links-container">
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={index}
                className="skeleton-link"
                animate={pulseAnimation}
              >
                <motion.div style={shimmerStyle} animate={shimmerAnimation} />
              </motion.div>
            ))}
        </div>
      </div>

      {/* Production Companies Section */}
      <div className="skeleton-productions">
        <motion.div
          className="skeleton-productions-title"
          animate={pulseAnimation}
        >
          <motion.div style={shimmerStyle} animate={shimmerAnimation} />
        </motion.div>
        <div className="skeleton-production-companies">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={index}
                className="skeleton-production-company"
                animate={pulseAnimation}
              >
                <motion.div style={shimmerStyle} animate={shimmerAnimation} />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const ErrorDetailsMovies = ({ message }) => {
  return (
    <div className="movie">
      <motion.div
        className="details-error"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "80%",
          padding: "var(--spacing-xl)",
          background: `linear-gradient(135deg, var(--bg-error), rgba(220, 53, 69, 0.1))`,
          color: "var(--text-color)",
          borderRadius: "var(--border-radius-md)",
          textAlign: "center",
          margin: "var(--spacing-xl) auto",
          backdropFilter: "blur(10px)",
          border: `1px solid var(--error-color)`,
          boxShadow: "var(--box-shadow)",
        }}
      >
        <h3
          style={{
            fontSize: "var(--font-size-2xl)",
            marginBottom: "var(--spacing-md)",
          }}
        >
          An error occurred
        </h3>
        <p style={{ fontSize: "var(--font-size-lg)" }}>{message}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: "var(--spacing-lg)",
            padding: "var(--spacing-sm) var(--spacing-xl)",
            background: "var(--error-color)",
            color: "var(--text-color)",
            border: "none",
            borderRadius: "var(--border-radius-lg)",
            fontSize: "var(--font-size-md)",
            cursor: "pointer",
          }}
          onClick={() => window.location.reload()}
        >
          <i
            className="fas fa-redo"
            style={{ marginRight: "var(--spacing-xs)" }}
          ></i>
          Try again
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SkeletonDetailsMovies;
