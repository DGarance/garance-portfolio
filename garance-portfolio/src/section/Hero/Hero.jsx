import React from "react";
import heroImg from "../../assets/programmer.svg";
import heroImgDark from "../../assets/programmer-dark.svg";
import { Button, ButtonDownload } from "../../components";


export default function Hero({ darkMode }) {
  const heroImage = darkMode ? heroImgDark : heroImg;
  return (
    <section>
      <div className="text-center ">
        <p>Bonjour 👋! Je suis Garance Defrel</p>
        <h1>
          Développeuse Web
          <span className="hero-span"> Fullstack</span>
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
          <ButtonDownload />
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
