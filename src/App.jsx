import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingFallback from "./components/utils/LoadingFallback";
import ScrollToTop from "./components/utils/ScrollToTop";
const Home = React.lazy(() => import("./pages/Home"));
const DetailsPage = React.lazy(() => import("./pages/DetailsPage"));
const PopularMoviesPage = React.lazy(() => import("./pages/PopularMoviesPage"));
const TopRatedPage = React.lazy(() => import("./pages/TopRatedPage"));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="*" element={<Home />}></Route>
            <Route path="/details/:id" element={<DetailsPage />}></Route>
            <Route
              path="/popular-movies"
              element={<PopularMoviesPage />}
            ></Route>
            <Route path="/top-rated-movies" element={<TopRatedPage />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
