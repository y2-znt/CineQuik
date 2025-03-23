import { motion } from "motion/react";
import React from "react";
import "../../CSS/details.css";

const SkeletonVideosMovies = () => {
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
    <div
      style={{
        width: "85%",
        margin: "var(--spacing-3xl) auto var(--spacing-3xl)",
      }}
    >
      <motion.div className="skeleton-heading" animate={pulseAnimation}>
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
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
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
  );
};

export const ErrorVideosMovies = ({ message }) => {
  return (
    <div style={{ width: "85%", margin: "var(--spacing-3xl) auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "var(--spacing-lg)",
          background: `linear-gradient(135deg, var(--bg-error), rgba(220, 53, 69, 0.1))`,
          color: "var(--text-color)",
          borderRadius: "var(--border-radius-md)",
          textAlign: "center",
          backdropFilter: "blur(10px)",
          border: `1px solid var(--error-color)`,
          boxShadow: "var(--box-shadow)",
          marginBottom: "var(--spacing-xl)",
        }}
      >
        <h3
          style={{
            fontSize: "var(--font-size-xl)",
            marginBottom: "var(--spacing-sm)",
          }}
        >
          Impossible de charger les vidéos
        </h3>
        <p style={{ fontSize: "var(--font-size-md)" }}>{message}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: "var(--spacing-md)",
            padding: "var(--spacing-xs) var(--spacing-md)",
            background: "var(--error-color)",
            color: "var(--text-color)",
            border: "none",
            borderRadius: "var(--border-radius-lg)",
            fontSize: "var(--font-size-sm)",
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

export default SkeletonVideosMovies;
