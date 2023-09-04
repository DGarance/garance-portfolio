import React from "react";
import { FaAward, FaUserGraduate, FaRegFileCode } from "react-icons/fa";
import { CardIntro, Button, ButtonDownload } from "../../components";
import profil from "../../assets/Garance-profil.webp";

export default function About() {
  return (
    <section className="py-20">
      <h2 className="text-center pb-10">À propos de moi</h2>
      <div className="about-container">
        <img
          className="about-img"
          src={profil}
          alt="Garance"
        />
        <div>
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
          <p className="about-text">
            Bonjour ! 👋
            <br /> Je suis Garance Defrel, <strong>développeuse web fullstack</strong>, actuellement en recherche
            d'alternance avec la <strong>Digital School of Paris</strong>.
          </p>
          <p className="about-text">
            Grâce à ma formation auprès d'OpenClassrooms, j'ai développé une forte attirance pour le{" "}
            <strong>front-end</strong> : j'aime tout particulièrement traduire en code des maquettes UI/UX et voir leur
            design prendre vie.
          </p>
          <p className="about-text">
            Au-delà de mes compétences solides en HTML, CSS et JavaScript, je me spécialise actuellement dans le
            framework <strong>ReactJS</strong> pour créer des interfaces utilisateur dynamiques et modernes.
          </p>
          <div className="flex justify-center  md:justify-normal">
            <Button
              to="/garance-portfolio/contact"
              color="transparent"
              text="Me contacter"
              className="mb-6"
            />
            <ButtonDownload />
          </div>
        </div>
      </div>
    </section>
  );
}
