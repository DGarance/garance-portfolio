import React from "react";
import heroImg from "../../assets/programmer.svg";
import heroImgDark from "../../assets/programmer-dark.svg";
import { Button } from "../../components";
import { FiArrowRight } from "react-icons/fi";

export default function Hero({ darkMode }) {
  const heroImage = darkMode ? heroImgDark : heroImg;
  return (
    <section className="hero-section">
      <div className="hero-container">
        <p>Bonjour 👋! je suis</p>
        <p>Garance Defrel,</p>
        <h1>
          Développeuse Web
          <span className="text-martinique-400 dark:text-martinique-400"> Fullstack</span>
        </h1>
        <p>En quête de nouvelles opportunités en développement Front-end</p>
        <div>
          <img
            className="hero-img"
            src={heroImage}
            alt="hero banner"
          />
        </div>
        <div className="pt-4">
          <Button
            className="btn-hover"
            to="/"
            color="hover"
            text="Mon CV"
            icon={<FiArrowRight className="btn-icon" />}
          />
          <Button
            className="btn-transparent"
            to="/portfolio"
            color="transparent"
            text="Mon Portfolio"
          />
        </div>
      </div>
    </section>
  );
}
