import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/header.css';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const hideNav = () => {
    setShowNav(false);
  };

  return (
    <div className="header">
      <div className='headerRight'>
        <input type="checkbox" id="check" checked={showNav} onChange={toggleNav} />
        <label htmlFor="check" className='checkbtn'>
          <i className="fas fa-bars"></i>
        </label>
        <NavLink to="/">
            <li className='logo'>
            <img src="/img/logo.png"/>
            CineQuick
            </li>
          </NavLink>
        <ul className={showNav ? 'show' : ''}>

          <NavLink to="/" onClick={hideNav}>
            <li>
              Home
            </li>
          </NavLink>
          <NavLink to="/movies" onClick={hideNav}>
            <li>Movies</li>
          </NavLink>
          <NavLink to="/TVSeries" onClick={hideNav}>
            <li>TV Series</li>
          </NavLink>
        </ul>
      </div>
      <div className="overlay" onClick={hideNav}></div>
    </div>
  );
};

export default Header;
