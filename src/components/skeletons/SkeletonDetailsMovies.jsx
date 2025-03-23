import { motion } from "motion/react";
import React from "react";
import "../../CSS/details.css";
import { SkeletonMovieList } from "./SkeletonMovieList";

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
    backgroundSize: "200% 100%",
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
        <motion.div className="skeleton-backdrop" animate={pulseAnimation}>
          <motion.div style={shimmerStyle} animate={shimmerAnimation} />
        </motion.div>
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
      <div
        style={{
          width: "85%",
          margin: "var(--spacing-3xl) auto var(--spacing-3xl)",
        }}
      >
        <motion.div
          style={{
            width: "200px",
            height: "32px",
            backgroundColor: "var(--skeleton-base)",
            borderRadius: "var(--border-radius-sm)",
            marginBottom: "var(--spacing-lg)",
            position: "relative",
            overflow: "hidden",
          }}
          animate={pulseAnimation}
        >
          <motion.div style={shimmerStyle} animate={shimmerAnimation} />
        </motion.div>

        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={index}
                style={{
                  backgroundColor: "rgba(20, 20, 20, 0.75)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "var(--border-radius-md)",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "var(--box-shadow)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: "var(--spacing-md)",
                  width: "480px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <motion.div
                  animate={pulseAnimation}
                  style={{
                    width: "100%",
                    height: "270px",
                    backgroundColor: "var(--skeleton-base)",
                    borderRadius: "var(--border-radius-sm)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <motion.div style={shimmerStyle} animate={shimmerAnimation} />
                </motion.div>
                <motion.div
                  animate={pulseAnimation}
                  style={{
                    width: "250px",
                    height: "16px",
                    backgroundColor: "var(--skeleton-base)",
                    borderRadius: "var(--border-radius-sm)",
                    marginTop: "var(--spacing-sm)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <motion.div style={shimmerStyle} animate={shimmerAnimation} />
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>

      <SkeletonMovieList />

      {/* Useful Links Section */}
      <motion.div
        style={{
          width: "85%",
          margin: "var(--spacing-2xl) auto var(--spacing-xl)",
          position: "relative",
        }}
      >
        <motion.div
          style={{
            width: "180px",
            height: "32px",
            backgroundColor: "var(--skeleton-base)",
            borderRadius: "var(--border-radius-sm)",
            marginBottom: "var(--spacing-md)",
            position: "relative",
            overflow: "hidden",
          }}
          animate={pulseAnimation}
        >
          <motion.div style={shimmerStyle} animate={shimmerAnimation} />
        </motion.div>

        <div style={{ display: "flex", gap: "var(--spacing-sm)" }}>
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={index}
                style={{
                  width: "150px",
                  height: "40px",
                  backgroundColor: "var(--skeleton-base)",
                  borderRadius: "var(--border-radius-lg)",
                  position: "relative",
                  overflow: "hidden",
                }}
                animate={pulseAnimation}
              >
                <motion.div style={shimmerStyle} animate={shimmerAnimation} />
              </motion.div>
            ))}
        </div>
      </motion.div>

      {/* Production Companies Section */}
      <motion.div
        style={{
          width: "85%",
          margin: "var(--spacing-3xl) auto var(--spacing-3xl)",
          position: "relative",
        }}
      >
        <motion.div
          style={{
            width: "250px",
            height: "32px",
            backgroundColor: "var(--skeleton-base)",
            borderRadius: "var(--border-radius-sm)",
            marginBottom: "var(--spacing-xl)",
            position: "relative",
            overflow: "hidden",
          }}
          animate={pulseAnimation}
        >
          <motion.div style={shimmerStyle} animate={shimmerAnimation} />
        </motion.div>

        <div
          className="movie__production skeleton-production"
          style={{ gap: "3rem" }}
        >
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(10px)",
                  padding: "var(--spacing-md) var(--spacing-lg)",
                  borderRadius: "var(--border-radius-md)",
                  boxShadow: "var(--box-shadow)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  width: "180px",
                  height: "140px",
                }}
              >
                <motion.div
                  animate={pulseAnimation}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "120px",
                    height: "80px",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  <motion.div style={shimmerStyle} animate={shimmerAnimation} />
                </motion.div>
                <motion.div
                  animate={pulseAnimation}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100px",
                    height: "16px",
                    backgroundColor: "var(--skeleton-base)",
                    borderRadius: "var(--border-radius-sm)",
                  }}
                >
                  <motion.div style={shimmerStyle} animate={shimmerAnimation} />
                </motion.div>
              </motion.div>
            ))}
        </div>
      </motion.div>
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
          Une erreur est survenue
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
          Réessayer
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SkeletonDetailsMovies;
