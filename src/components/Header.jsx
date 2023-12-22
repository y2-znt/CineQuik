import React from 'react';
import "../CSS/header.css"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className='headerLeft'>
        {/* Unordered list for navigation links */}
        <ul>
          {/* NavLink for the "Home" route */}
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>
                Cine Verse
            </li>
          </NavLink>
          {/* NavLink for the "About" route */}
          <NavLink
            to="/movie/popular"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Popular</li>
          </NavLink>
          <NavLink
            to="/movie/top_rated"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Top Rated</li>
          </NavLink>
          <NavLink
            to="/movie/upcoming"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Upcomming</li>
          </NavLink>
        </ul>
        </div>
      </div>
    );
};

export default Header;