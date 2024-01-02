import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Declaration of page components asynchronously using React.lazy()
const Home = React.lazy(() => import("./pages/Home"));
const PopularMoviesPage = React.lazy(() => import("./pages/PopularMoviesPage"));
const DetailsPage = React.lazy(() => import("./pages/DetailsPage"));
const TopRatedPage = React.lazy(() => import("./pages/TopRatedPage"));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Default route for Home */}
            <Route path="*" element={<Home />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/popular-movies" element={<PopularMoviesPage />} />
            <Route path="/top-rated-movies" element={<TopRatedPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
