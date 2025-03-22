import React from "react";
import "../../CSS/carousel.css";

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

export const ErrorCarousel = ({ message }) => {
  return (
    <div className="poster">
      <div className="carousel-error">
        <h3>Une erreur est survenue</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};