import React from "react";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import TopRatedMovieList from "../components/moviesList/components/TopRatedMovieList";

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
