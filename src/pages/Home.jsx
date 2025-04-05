import React from "react";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import PopularMovieList from "../components/moviesList/components/PopularMovieList";
import TopRatedMovieList from "../components/moviesList/components/TopRatedMovieList";
import Carousel from "../components/shared/Carousel";

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
