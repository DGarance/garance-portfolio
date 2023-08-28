import React from "react";
import { FaAward, FaUserGraduate, FaRegFileCode } from "react-icons/fa";
import { CardIntro, Button } from "../../components";
import profil from "../../assets/Garance-profil.jpg";

export default function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">À propos de moi</h2>
      <div className="about-container">
        <img
          className="about-img"
          src={profil}
          alt="Garance"
        />
        <div className="flex flex-col">
          <div className="about-box-grid">
            <CardIntro
              icon={<FaAward />}
              title="Formation"
              subtitle="Diplômée en développement web"
            />
            <CardIntro
              icon={<FaRegFileCode />}
              title="Projets réalisés"
              subtitle="6 et d'autres en cours"
            />
            <CardIntro
              icon={<FaUserGraduate />}
              title="École"
              subtitle="OpenClassrooms"
            />
          </div>
          <p className="my-8">
            Bonjour 👋 ! Je suis Garance Defrel, récemment diplômée en développement web Fullstack 🎉 et en quête
            d'opportunités pour approfondir mes compétences.
            <br />
            Au-delà de mes compétences solides en HTML, CSS et JavaScript, je me spécialise actuellement dans le
            framework ReactJS pour créer des interfaces utilisateur dynamiques et modernes.
            <br />
            Attirée par le développement front-end, j'adore donner vie aux maquettes en design UI/UX et les coder pour
            voir concrètement le résultat de mon travail.
          </p>
          <Button
          to="/contact"
          color="transparent"
          text="Me contacter">

          </Button>
        </div>
      </div>
    </section>
  );
}
