import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from './pages/Home';
import Header from './components/Header';
import MoviesPage from './pages/MoviesPage';
import TVList from './components/TVList';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
        {/* Defining routes using Routes and Route components */}
        <Routes>
          {/* Default route for Home */}
          <Route path="*" element={<Home />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/TVSeries" element={< TVList />}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
};

export default App;