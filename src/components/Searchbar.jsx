import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSearchMovies } from "../api/moviesApi";
import "../CSS/searchbar.css";

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const searchRef = useRef(null);

  const { data, refetch, error, isLoading } = useQuery({
    queryKey: ["searchedMovies", query],
    queryFn: () => fetchSearchMovies(query),
    enabled: false,
    onSuccess: (data) => onSearch(data),
  });

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (query.length > 1) {
        refetch();
      }
    }, 300); // Debounce search for better performance

    return () => clearTimeout(debounceTimer);
  }, [query, refetch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.getFullYear();
  };

  return (
    <div className="search-container" ref={searchRef}>
      <form
        className={`search-form ${isExpanded ? "expanded" : ""}`}
        onSubmit={handleSubmit}
      >
        <div className="search-input-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleFocus}
          />
          {query && (
            <button
              type="button"
              className="clear-button"
              onClick={() => setQuery("")}
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </form>

      {isExpanded && (query || isLoading || error || data) && (
        <div className="search-results-container">
          {isLoading && (
            <div className="search-message">
              <i className="fas fa-spinner fa-spin"></i>
              <span>Searching...</span>
            </div>
          )}

          {error && (
            <div className="search-error">
              <i className="fas fa-exclamation-circle"></i>
              <span>Error: {error.message}</span>
            </div>
          )}

          {data && data.length === 0 && query && (
            <div className="search-message">
              <i className="fas fa-info-circle"></i>
              <span>No movies found</span>
            </div>
          )}

          <div className="search-results">
            {data &&
              data.map((movie) => (
                <Link
                  to={`/details/${movie.id}`}
                  key={movie.id}
                  className="card"
                  onClick={() => setIsExpanded(false)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                    alt={movie.title}
                    loading="lazy"
                  />
                  <div className="card__content">
                    <div className="card__title">{movie.title}</div>
                    <div className="card__info">
                      <span>{formatDate(movie.release_date)}</span>
                      <div className="card__rating">
                        <i className="fas fa-star"></i>
                        <span>{movie.vote_average.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
