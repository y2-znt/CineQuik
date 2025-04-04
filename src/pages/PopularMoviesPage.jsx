import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PopularMovieList from "../components/moviesList/PopularMovieList";

const MoviesPage = () => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "164px" }}></div>
      <PopularMovieList showViewAll={false} />
      <Footer />
    </div>
  );
};

export default MoviesPage;
