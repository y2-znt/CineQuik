import React from "react";
import "../../CSS/carousel.css";
import "../../CSS/global.css";

export const SkeletonCarousel = () => {
  return (
    <div className="poster">
      <div className="skeleton-posterImage">
        <div className="skeleton-overlay">
          <div className="skeleton-title"></div>
          <div className="skeleton-runtime"></div>
          <div className="skeleton-description"></div>
        </div>
      </div>
    </div>
  );
};

export const ErrorCarousel = ({ message, onRetry }) => {
  return (
    <div className="poster">
      <div className="carousel-error">
        <h3>Une erreur est survenue</h3>
        <p>{message || "Impossible de charger les films du carousel"}</p>
        <button
          onClick={onRetry || (() => window.location.reload())}
          className="btn btn-primary"
          style={{ marginTop: "15px" }}
        >
          Réessayer
        </button>
      </div>
    </div>
  );
};
