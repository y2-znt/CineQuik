import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/header.css";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/186/943/original/green-play-button-png.png"
            alt="logo"
          />
          CineQuick
        </NavLink>
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
          <NavLink
            to="/"
            onClick={hideNav}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/popular-movies"
            onClick={hideNav}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Popular</li>
          </NavLink>
          <NavLink
            to="/top-rated-movies"
            onClick={hideNav}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>Top Rated</li>
          </NavLink>
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
