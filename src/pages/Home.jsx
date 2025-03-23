import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PopularMovieList from "../components/moviesList/PopularMovieList";
import TopRatedMovieList from "../components/moviesList/TopRatedMovieList";
import Searchbar from "../components/Searchbar";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Searchbar />
      <PopularMovieList />
      <TopRatedMovieList />
      <Footer />
    </div>
  );
};

export default Home;
