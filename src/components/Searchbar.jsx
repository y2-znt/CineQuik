import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { fetchSearchMovies } from "../api/moviesApi";
import "../CSS/searchbar.css";
import FadeOnScroll from "./animations/FadeOnScroll";
import Card from "./Card";

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const { data, refetch, error } = useQuery({
    queryKey: ["searchedMovies", query],
    queryFn: () => fetchSearchMovies(query),
    enabled: false,
    onSuccess: (data) => onSearch(data),
  });

  useEffect(() => {
    if (query.length > 1) {
      refetch();
    }
  }, [query, refetch]);

  const changeHandler = (e) => {
    const inputQuery = e.target.value;
    setQuery(inputQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div>
      <form className="fieldSearching" onSubmit={handleSubmit}>
        <input
          className="input__search"
          type="text"
          placeholder="Movie search"
          value={query}
          onChange={changeHandler}
        />
        <button type="submit" className="btn__search">
          Search
        </button>
      </form>

      {error && <div>Error fetching movies: {error.message}</div>}

      <div className="movie__list">
        <div className="list__cards">
          {data &&
            data.map((movie) => (
              <FadeOnScroll key={movie.id}>
                <Card movie={movie} />
              </FadeOnScroll>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
