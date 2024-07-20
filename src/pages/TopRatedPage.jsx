import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import TopRatedMovieList from "../components/TopRatedMovieList";

const TopRatedPage = () => {
  return (
    <div>
      <Header />
      <Searchbar />
      <TopRatedMovieList />
      <Footer />
    </div>
  );
};

export default TopRatedPage;
