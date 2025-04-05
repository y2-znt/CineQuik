import { motion } from "motion/react";
import React from "react";
import "../../css/card.css";

const SkeletonCard = () => {
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
      "linear-gradient(90deg, var(--skeleton-base) 25%, var(--skeleton-highlight) 50%, var(--skeleton-base) 75%)",
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
      className="cards"
      style={{
        background: "var(--skeleton-base)",
        transform: "none",
        boxShadow: "var(--box-shadow)",
      }}
    >
      <motion.div
        className="skeleton-poster"
        style={{
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <motion.div style={shimmerStyle} animate={shimmerAnimation} />
      </motion.div>

      <motion.div
        className="cards__overlay"
        style={{
          opacity: 1,
          transform: "none",
          background:
            "linear-gradient(to top, var(--bg-color) 0%, transparent 100%)",
        }}
      >
        <motion.div
          className="skeleton-title"
          style={{
            height: "24px",
            width: "80%",
            borderRadius: "4px",
            marginBottom: "var(--spacing-sm)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div style={shimmerStyle} animate={shimmerAnimation} />
        </motion.div>

        <motion.div
          className="skeleton-subtitle"
          style={{
            height: "16px",
            width: "60%",
            borderRadius: "4px",
            marginBottom: "var(--spacing-sm)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div style={shimmerStyle} animate={shimmerAnimation} />
        </motion.div>

        <motion.div
          style={{
            height: "14px",
            width: "90%",
            borderRadius: "4px",
            marginBottom: "6px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div style={shimmerStyle} animate={shimmerAnimation} />
        </motion.div>

        <motion.div
          style={{
            height: "14px",
            width: "70%",
            borderRadius: "4px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div style={shimmerStyle} animate={shimmerAnimation} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkeletonCard;
