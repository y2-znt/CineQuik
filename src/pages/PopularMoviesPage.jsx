import React from "react";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import PopularMovieList from "../components/moviesList/components/PopularMovieList";

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
