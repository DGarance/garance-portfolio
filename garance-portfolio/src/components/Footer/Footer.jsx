import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
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
          <Button
            title="Link"
            to="https://github.com/DGarance"
            icon={
              <FaGithub
                aria-hidden="true"
                role="img"
                className="icon-color w-6 h-6 "
              />
            }
          />
          <Button
            to="https://www.linkedin.com/in/garance-defrel-3b269b279/"
            icon={<FaLinkedin className="icon-color w-6 h-6 " />}
          />
          <Button
            to="https://twitter.com/Akane9721"
            icon={<FaTwitter className="icon-color w-6 h-6 " />}
          />
        </div>
      </div>
    </footer>
  );
}
