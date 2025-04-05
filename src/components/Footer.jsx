import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content_container">
        <div className="footer__content__main">
          <div className="footer__content__about">
            <div className="logo">
              <img
                src="https://static.vecteezy.com/system/resources/previews/001/186/943/original/green-play-button-png.png"
                alt="CineQuik Logo"
              />
              <NavLink to="/">CineQuik</NavLink>
            </div>
            <p className="footer__description">
              Discover and explore the best movies, from blockbusters to
              timeless classics. Get detailed information, watch trailers, and
              find your next favorite film.
            </p>
          </div>

          <div className="footer__content__navigation">
            <h3 className="footer__menu_title">Navigation</h3>
            <div className="footer__nav_links">
              <NavLink to="/">
                <i className="fas fa-home"></i>
                Home
              </NavLink>
              <NavLink to="/popular-movies">
                <i className="fas fa-fire"></i>
                Popular Movies
              </NavLink>
              <NavLink to="/top-rated-movies">
                <i className="fas fa-star"></i>
                Top Rated Movies
              </NavLink>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom_content">
            <p className="copyright">
              © {new Date().getFullYear()} CineQuik. All rights reserved.
            </p>

            <p className="footer__signature">
              Powered by{" "}
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="tmdb-link"
              >
                TMDB
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
