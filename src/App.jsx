import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DetailsPage from "./pages/DetailsPage";
import Home from "./pages/Home";
import PopularMoviesPage from "./pages/PopularMoviesPage";
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
