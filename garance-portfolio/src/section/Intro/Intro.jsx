import React from "react";
import { Button } from "../../components";
import profil from "../../assets/Garance-profil-min.jpg";
import { FiArrowRight } from "react-icons/fi";

export default function Intro() {
  return (
    <section>
      <div className="intro-container">
        <div className="intro-block-img">
          <img
            className="intro-img"
            alt="Garance"
            src={profil}
          />
        </div>
        <div className="intro-block-text">
          <h2 className="mb-10">Présentation</h2>
          <p className="mb-10">
            Après avoir travaillé pendant quelques années dans le secteur du service, j'ai choisi de me réorienter vers
            le monde du développement web, dans lequel j'ai trouvé ma vocation.
          </p>
          <div className="flex justify-center">
            <Button
              to="/garance-portfolio/about"
              className="btn-hover items-center"
              color="hover"
              text="En savoir plus"
              icon={<FiArrowRight className="btn-icon" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
