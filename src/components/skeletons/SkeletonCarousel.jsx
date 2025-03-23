import { motion } from "motion/react";
import React from "react";
import "../../CSS/carousel.css";
import "../../CSS/global.css";

export const SkeletonCarousel = () => {
  const pulseAnimation = {
    opacity: [0.5, 0.8, 0.5],
    transition: {
      repeat: Infinity,
      duration: 0.8,
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
    backgroundSize: "200% 100%",
    borderRadius: "inherit",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <div className="poster">
      <motion.div
        className="skeleton-posterImage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "var(--skeleton-base)",
          }}
          animate={pulseAnimation}
        >
          <motion.div style={shimmerStyle} animate={shimmerAnimation} />
        </motion.div>
      </motion.div>

      <div className="skeleton-overlay">
        <div className="skeleton">
          <div className="skeleton-header">
            <div className="skeleton-title-container">
              <div className="skeleton-title" animate={pulseAnimation}>
                <div style={shimmerStyle} animate={shimmerAnimation} />
              </div>
            </div>
          </div>

          <div className="skeleton-meta">
            <div className="skeleton-date" animate={pulseAnimation}>
              <div style={shimmerStyle} animate={shimmerAnimation} />
            </div>
            <div className="skeleton-rating" animate={pulseAnimation}>
              <motion.div style={shimmerStyle} animate={shimmerAnimation} />
            </div>
          </div>

          <div className="skeleton-genres">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton-genre" animate={pulseAnimation}>
                <div style={shimmerStyle} animate={shimmerAnimation} />
              </div>
            ))}
          </div>

          <div className="skeleton-description" animate={pulseAnimation}>
            <div style={shimmerStyle} animate={shimmerAnimation} />
          </div>

          <div className="skeleton-actions">
            <div className="skeleton-button" animate={pulseAnimation}>
              <div style={shimmerStyle} animate={shimmerAnimation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ErrorCarousel = ({ message, onRetry }) => {
  return (
    <div className="poster">
      <motion.div
        className="carousel-error"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Une erreur est survenue
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {message || "Impossible de charger les films du carousel"}
        </motion.p>
        <motion.button
          onClick={onRetry || (() => window.location.reload())}
          className="carousel-error-button"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-redo"></i>
          Réessayer
        </motion.button>
      </motion.div>
    </div>
  );
};
