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

  const toggleNav = () => {
    setShowNav(!showNav);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = !showNav ? "hidden" : "";
  };

  const hideNav = () => {
    setShowNav(false);
    document.body.style.overflow = "";
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="headerRight">
        <NavLink to="/" className="logo">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/186/943/original/green-play-button-png.png"
            alt="logo"
          />
          CineQuick
        </NavLink>

        <input
          type="checkbox"
          id="check"
          checked={showNav}
          onChange={toggleNav}
        />
        <label htmlFor="check" className="checkbtn">
          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>

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

        {showNav && <div className="overlay" onClick={hideNav}></div>}
      </div>
    </header>
  );
};

export default Header;
