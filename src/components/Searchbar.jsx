import React, { useState } from "react";
import Cards from "./Card"; 
import "../CSS/searchbar.css"
const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [movieData, setMovieData] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovieData(data.results);
      onSearch(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const changeHandler = (e) => {
    const inputQuery = e.target.value;
    setQuery(inputQuery);

    if (inputQuery.length > 1) {
      searchMovie(e);   
    }
  };

  return (
    <div>
      <form className="fieldSearching" onSubmit={searchMovie}>
        <input
          className="input__search"
          type="text"
          placeholder="Movie search"
          value={query}
          onChange={changeHandler}
        />
        <button type="submit" className="btn__search">Search</button>
      </form>

      <div className="media__list">
        <div className="list__cards">
          {movieData.map((movie) => (
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
