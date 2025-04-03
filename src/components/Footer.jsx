import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/footer.css";

const Footer = () => {
  const menuItems = {
    company: [
      { to: "/", label: "Home" },
      { to: "/contact", label: "Contact us" },
      { to: "/terms", label: "Terms of service" },
      { to: "/about", label: "About us" },
    ],
    support: [
      { to: "/live", label: "Live" },
      { to: "/faq", label: "FAQ" },
      { to: "/premium", label: "Premium" },
      { to: "/privacy", label: "Privacy policy" },
    ],
    discover: [
      { to: "/must-watch", label: "Must Watch" },
      { to: "/new-releases", label: "New Releases" },
      { to: "/top-rated", label: "Top IMDB" },
    ],
  };

  return (
    <footer className="footer">
      <div className="footer__content_container">
        <div className="footer__content__logo">
          <div className="logo">
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/186/943/original/green-play-button-png.png"
              alt="CineQuik Logo"
            />
            <NavLink to="/">CineQuik</NavLink>
          </div>
        </div>

        <div className="footer__content__menus">
          <div className="footer__content__menu">
            {menuItems.company.map((item, index) => (
              <NavLink key={`company-${index}`} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="footer__content__menu">
            {menuItems.support.map((item, index) => (
              <NavLink key={`support-${index}`} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="footer__content__menu">
            {menuItems.discover.map((item, index) => (
              <NavLink key={`discover-${index}`} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} CineQuik. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
