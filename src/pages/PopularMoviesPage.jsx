import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PopularMovieList from "../components/PopularMovieList";
import Searchbar from "../components/Searchbar";

const MoviesPage = () => {
  return (
    <div>
      <Header />
      <Searchbar />
      <PopularMovieList />
      <Footer />
    </div>
  );
};

export default MoviesPage;
