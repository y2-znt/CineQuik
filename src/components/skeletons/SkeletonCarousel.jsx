import { motion } from "motion/react";
import React from "react";
import "../../css/carousel.css";

export const SkeletonCarousel = () => {
  const pulseAnimation = {
    opacity: [0.5, 0.8, 0.5],
    transition: {
      repeat: Infinity,
      duration: 2,
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
    backgroundSize: "0% 100%",
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

      <div className="posterImage__overlay">
        <div className="posterImage__content">
          <div className="posterImage__title">
            <motion.div
              className="skeleton-title"
              style={{
                height: "40px",
                width: "60%",
                borderRadius: "4px",
                background: "var(--skeleton-base)",
              }}
              animate={pulseAnimation}
            >
              <motion.div style={shimmerStyle} animate={shimmerAnimation} />
            </motion.div>
          </div>

          <div className="posterImage__runtime">
            <motion.div
              className="skeleton-date"
              style={{
                height: "24px",
                width: "120px",
                borderRadius: "4px",
                background: "var(--skeleton-base)",
              }}
              animate={pulseAnimation}
            >
              <motion.div style={shimmerStyle} animate={shimmerAnimation} />
            </motion.div>
            <motion.div
              className="skeleton-rating posterImage__rating"
              style={{
                height: "24px",
                width: "80px",
                borderRadius: "4px",
                background: "var(--skeleton-base)",
              }}
              animate={pulseAnimation}
            >
              <motion.div style={shimmerStyle} animate={shimmerAnimation} />
            </motion.div>
          </div>

          <div className="posterImage__genres">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="posterImage__genre"
                style={{
                  height: "24px",
                  width: "80px",
                  borderRadius: "20px",
                  background: "var(--skeleton-base)",
                }}
                animate={pulseAnimation}
              >
                <motion.div style={shimmerStyle} animate={shimmerAnimation} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="posterImage__description"
            style={{
              height: "80px",
              width: "100%",
              borderRadius: "4px",
              background: "var(--skeleton-base)",
            }}
            animate={pulseAnimation}
          >
            <motion.div style={shimmerStyle} animate={shimmerAnimation} />
          </motion.div>

          <div className="posterImage__buttons">
            <motion.div
              className="posterImage__detailButton"
              style={{
                height: "40px",
                width: "120px",
                borderRadius: "4px",
                background: "var(--skeleton-base)",
              }}
              animate={pulseAnimation}
            >
              <motion.div style={shimmerStyle} animate={shimmerAnimation} />
            </motion.div>
            <motion.div
              className="posterImage__secondaryButton"
              style={{
                height: "40px",
                width: "120px",
                borderRadius: "4px",
                background: "var(--skeleton-base)",
              }}
              animate={pulseAnimation}
            >
              <motion.div style={shimmerStyle} animate={shimmerAnimation} />
            </motion.div>
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
          An error occurred
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {message || "Unable to load carousel movies"}
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
          Try again
        </motion.button>
      </motion.div>
    </div>
  );
};
