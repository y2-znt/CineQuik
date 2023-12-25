import React from 'react';
import "../CSS/header.css"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className='headerRight'>
        {/* Unordered list for navigation links */}
        <ul>
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>
                Home
            </li>
          </NavLink>
          <NavLink
            to="/movies"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Movies</li>
          </NavLink>
          <NavLink
            to="/TVSeries"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>TV Series</li>
          </NavLink>
          {/* <NavLink
            to="/movie/upcoming"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Upcomming</li>
          </NavLink> */}
        </ul>
        </div>
      </div>
    );
};

export default Header;