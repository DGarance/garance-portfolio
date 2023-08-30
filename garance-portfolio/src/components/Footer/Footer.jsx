import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="text-center">
        <div>
          <Link
            className="footer-link"
            to="/"
            aria-label="Brand">
            Garance Defrel
          </Link>
        </div>
        <div className="mt-4">
          <p className="footer-email">garance.defrel@outlook.com</p>
          <p className="footer-copyright"> © 2023 Copyright Garance Defrel. Tous droits réservés.</p>
        </div>
        <div className="mt-3 space-x-2">
          <Link
            to="https://github.com/DGarance"
            className="icon-color">
            <FaGithub className="w-6 h-6"></FaGithub>
          </Link>
          <Link
            to="https://www.linkedin.com/in/garance-defrel-3b269b279/"
            className="icon-color">
            <FaLinkedin className="w-6 h-6"></FaLinkedin>
          </Link>{" "}
          <Link
            to="https://twitter.com/Akane9721"
            className="icon-color">
            <FaTwitter className="w-6 h-6"></FaTwitter>
          </Link>
        </div>
      </div>
    </footer>
  );
}
