import React from "react";
import heroImg from "../../assets/programmer.svg";
import heroImgDark from "../../assets/programmer-dark.svg";
import { Button } from "../../components";
import { FiDownload } from "react-icons/fi";
import pdf from "../../assets/CV-Defrel-Garance.pdf";

export default function Hero({ darkMode }) {
  const heroImage = darkMode ? heroImgDark : heroImg;
  return (
    <section>
      <div className="text-center ">
        <p>Bonjour 👋! Je suis Garance Defrel</p>
        <h1>
          Développeuse Web
          <span className="text-2xl lg:text-5xl text-primary-600 dark:text-primary-400"> Fullstack</span>
        </h1>
        <p>En quête de nouvelles opportunités en développement Front-end</p>
        <div>
          <img
            className="hero-img"
            src={heroImage}
            alt="hero banner"
          />
        </div>
        <div>
          <Button
            to={pdf}
            color="hover"
            text="Mon CV"
            icon={<FiDownload className="btn-icon" />}
          />
          <Button
            to="/portfolio"
            color="transparent"
            text="Mon portfolio"
          />
        </div>
      </div>
    </section>
  );
}
