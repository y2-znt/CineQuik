import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import "../CSS/searchbar.css";
import Card from "./Card";
import { fetchSearchMovies } from "../api/fetchSearchMovies";

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const { data, refetch, isLoading, error } = useQuery({
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

      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching movies: {error.message}</div>}

      <div className="movie__list">
        <div className="list__cards">
          {data && data.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
