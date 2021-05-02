import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MainMenu } from "./styles/header";
import "./styles/header.css";

const Header = () => {
  const [canShow, setCanShow] = useState(false);

  const handleClickToggle = () => {
    setCanShow(!canShow);
  };
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header className="main-header">
      {pathname !== "/social" && (
        <nav className={`main-nav ${!canShow ? "bg-tranparent" : "bg-black"}`}>
          <div className="button-toggle">
            <button
              onClick={handleClickToggle}
              type="button"
              className="button"
            >
              <svg
                className="button__size"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <title>Menu | Obipolare</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={`${
                    !canShow ? "M4 6h16M4 12h16M4 18h7" : "M6 18L18 6M6 6l12 12"
                  }`}
                />
              </svg>
            </button>
          </div>
          <ul className={`main-menu ${!canShow && "hidden"}`}>
            <li className="main-menu__item">
              <NavLink
                activeClassName="main-menu__link--active"
                className="main-menu__link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="main-menu__item">
              <NavLink className="main-menu__link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="main-menu__item">
              <NavLink className="main-menu__link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
