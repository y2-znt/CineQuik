import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import DetailsPage from "./pages/DetailsPage";
import TopRatedPage from "./pages/TopRatedPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Defining routes using Routes and Route components */}
        <Routes>
          {/* Default route for Home */}
          <Route path="*" element={<Home />}></Route>
          <Route path="/details/:id" element={<DetailsPage />}></Route>
          <Route path="/popular-movies" element={<PopularMoviesPage />}></Route>
          <Route path="/top-rated-movies" element={<TopRatedPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;