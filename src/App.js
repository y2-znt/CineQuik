import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from './pages/Home';
import Header from './components/Header';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
        {/* Defining routes using Routes and Route components */}
        <Routes>
          {/* Default route for Home */}
          <Route path="*" element={<Home />}></Route>
          <Route path="movie/:id" element={<h1> Movie detail page</h1>}></Route>
          <Route path="movies/:type" element={<h1> Movies list page</h1>}></Route>
        </Routes>
      </BrowserRouter>    
    </div>
  );
};

export default App;