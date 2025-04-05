import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";

const Home = React.lazy(() => import("./pages/Home"));
const DetailsPage = React.lazy(() => import("./pages/DetailsPage"));
const PopularMoviesPage = React.lazy(() => import("./pages/PopularMoviesPage"));
const TopRatedPage = React.lazy(() => import("./pages/TopRatedPage"));

const LoadingFallback = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "var(--bg-primary)",
      color: "var(--primary-color)",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <i
        className="fas fa-spinner fa-spin fa-2x"
        style={{ marginBottom: "1rem" }}
      ></i>
      <p>Loading...</p>
    </div>
  </div>
);

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
