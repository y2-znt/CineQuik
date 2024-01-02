import React, { Suspense } from "react";

const DetailsMovies = React.lazy(() => import("../components/DetailsMovies"));
const Footer = React.lazy(() => import("../components/Footer"));

const DetailsPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DetailsMovies />
        <Footer />
      </Suspense>
    </div>
  );
};

export default DetailsPage;
