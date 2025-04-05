import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PopularMovieList from "../components/moviesList/PopularMovieList";
import TopRatedMovieList from "../components/moviesList/TopRatedMovieList";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <div style={{ marginTop: "164px" }}></div>
      <PopularMovieList useScrollAnimation={true} />
      <div style={{ marginTop: "28px" }}></div>
      <TopRatedMovieList useScrollAnimation={true} />
      <Footer />
    </div>
  );
};

export default Home;
