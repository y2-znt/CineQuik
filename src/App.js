import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import MoviesPage from "./pages/MoviesPage";
import TVList from "./components/TVList";
import MovieDetail from "./components/DetailsMedia";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* Defining routes using Routes and Route components */}
        <Routes>
          {/* Default route for Home */}
          <Route path="*" element={<Home />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/TVSeries" element={<TVList />}></Route>
          <Route path="/details/:id" element={<DetailsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
