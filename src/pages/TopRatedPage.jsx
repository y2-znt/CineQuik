import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopRatedMovieList from "../components/moviesList/TopRatedMovieList";

const TopRatedPage = () => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "164px" }}></div>
      <TopRatedMovieList showViewAll={false} />
      <Footer />
    </div>
  );
};

export default TopRatedPage;
