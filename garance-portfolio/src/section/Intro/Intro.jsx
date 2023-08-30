import React from "react";
import { Button } from "../../components";
import profil from "../../assets/Garance-profil.jpg";
import { FiArrowRight } from "react-icons/fi";

export default function Intro() {
  return (
    <section>
      <div className="py-6">
        <div className="intro-grid">
          <div className="intro-block">
            <div className="intro-block-img">
              <img
                alt="Garance"
                src={profil}
                className="intro-img"
              />
            </div>
          </div>
          <div className="intro-block-text">
            <div className="intro-text">
              <h2>Présentation</h2>
              <p className="my-6">
                Après avoir travaillé pendant quelques années dans le secteur du service, j'ai choisi de me réorienter
                vers le monde du développement web, dans lequel j'ai trouvé ma vocation.
              </p>
              <Button
                to="/about"
                className="btn-hover items-center"
                color="hover"
                text="En savoir plus"
                icon={<FiArrowRight className="btn-icon" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
