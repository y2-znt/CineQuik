import React from "react";
import DetailsMovies from "../components/detailsMovies/DetailsMovies";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

const DetailsPage = () => {
  return (
    <div>
      <Header />
      <DetailsMovies />
      <Footer />
    </div>
  );
};

export default DetailsPage;
