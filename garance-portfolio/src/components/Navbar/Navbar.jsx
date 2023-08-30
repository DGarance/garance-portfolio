import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sun from "../../assets/sun.svg";
import Moon from "../../assets/moon.svg";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <span className="navbar-brand">Garance Defrel</span>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`navbar-toggle ${isOpen ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto `}>
        <div className="navbar-links">
          <Link
            to="/"
            className="navbar-link">
            Accueil
          </Link>
          <Link
            to="/about"
            className="navbar-link">
            A propos de moi
          </Link>
          <Link
            to="/portfolio"
            className="navbar-link ">
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="navbar-link">
            Contact
          </Link>
        </div>
        <div className="flex lg:flex-shrink-0 justify-center lg:justify-start items-center mt-4 lg:mt-0">
          <img
            className="w-6 h-6 self-center"
            onClick={props.toggleDarkMode}
            src={props.darkMode ? Sun : Moon}
            alt=""
          />
        </div>
      </div>
    </nav>
  );
}
