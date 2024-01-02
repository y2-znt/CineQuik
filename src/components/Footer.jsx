import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__img"></div>
      <div className="footer__content_container">
        <div className="footer__content__logo">
          <div className="logo">
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/186/943/original/green-play-button-png.png"
              alt="logo"
            />
            <NavLink to="/">CineQuik</NavLink>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Contact us</NavLink>
            <NavLink to="/">Term of services</NavLink>
            <NavLink to="/">About us</NavLink>
          </div>
          <div className="footer__content__menu">
            <NavLink to="/">Live</NavLink>
            <NavLink to="/">FAQ</NavLink>
            <NavLink to="/">Premium</NavLink>
            <NavLink to="/">Pravacy policy</NavLink>
          </div>
          <div className="footer__content__menu">
            <NavLink to="/">You must watch</NavLink>
            <NavLink to="/">Recent release</NavLink>
            <NavLink to="/">Top IMDB</NavLink>
          </div>
        </div>
        <div className="copyright">© 2024 Yoni Deserbaix. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
