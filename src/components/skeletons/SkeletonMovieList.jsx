import { motion } from "motion/react";
import "../../css/movieList.css";

export const SkeletonMovieList = ({ title = "Movies" }) => {
  return (
    <motion.div
      className="media__list"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="list__header">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 className="list__title">{title}</h2>
          <div className="skeleton-button" style={{ width: "80px" }}></div>
        </div>
        <div
          className="skeleton-text"
          style={{ width: "70%", height: "16px" }}
        ></div>
      </div>

      <div className="list__cards">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div className="skeleton-card" key={index}>
              <div className="skeleton-poster"></div>
              <div className="skeleton-details">
                <div className="skeleton-title"></div>
                <div className="skeleton-stats"></div>
              </div>
            </div>
          ))}
      </div>

      <div className="list__footer">
        <div
          className="skeleton-button"
          style={{ width: "150px", height: "40px" }}
        ></div>
      </div>
    </motion.div>
  );
};

export const ErrorMovieList = ({ message, title = "Movies" }) => {
  return (
    <motion.div
      className="media__list error-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="list__header">
        <h2 className="list__title">{title}</h2>
      </div>
      <div className="error-message">
        <i className="fas fa-exclamation-circle"></i>
        <h3>Something went wrong</h3>
        <p>{message || "Failed to load movies. Please try again later."}</p>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    </motion.div>
  );
};
