import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PopularMovieList from "../components/PopularMovieList";
import Searchbar from "../components/Searchbar";
import TopRatedMovieList from "../components/TopRatedMovieList";

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
