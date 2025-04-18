import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/header.css";
import Searchbar from "./Searchbar";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showNav && !event.target.closest(".headerRight")) {
        hideNav();
      }
    };

    if (showNav) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showNav]);

  const toggleNav = (e) => {
    e.stopPropagation();
    setShowNav(!showNav);
    document.body.style.overflow = !showNav ? "hidden" : "";
  };

  const hideNav = () => {
    setShowNav(false);
    document.body.style.overflow = "";
  };

  const handleSearchResults = (results) => {
    // TODO: Handle search results (e.g., navigate to search results page)
    console.log("Search results:", results);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="headerLeft">
        <NavLink to="/" className="logo">
          <img src="/logo.webp" alt="CineQuik Logo" />
          CineQuick
        </NavLink>
        <Searchbar onSearch={handleSearchResults} />
      </div>

      <div className="headerRight">
        <button
          className={`menu-button ${showNav ? "active" : ""}`}
          onClick={toggleNav}
          aria-label="Toggle menu"
        >
          <i className={`fas ${showNav ? "fa-times" : "fa-bars"}`}></i>
        </button>

        <ul className={showNav ? "show" : ""}>
          <li>
            <NavLink
              to="/"
              onClick={hideNav}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/popular-movies"
              onClick={hideNav}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/top-rated-movies"
              onClick={hideNav}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Top Rated
            </NavLink>
          </li>
        </ul>

        <div
          className={`overlay ${showNav ? "show" : ""}`}
          onClick={hideNav}
        ></div>
      </div>
    </header>
  );
};

export default Header;
