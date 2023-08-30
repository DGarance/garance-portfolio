import React from "react";
import { FaAward, FaUserGraduate, FaRegFileCode} from "react-icons/fa";
import { FiDownload } from "react-icons/fi"; 
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
        <div className="">
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
          <p className="my-4 text-justify">
            Bonjour ! 👋
            <br /> Je suis Garance Defrel, <strong>développeuse web fullstack</strong>, actuellement en recherche
            d'alternance avec la <strong>Digital School of Paris</strong>.
          </p>
          <p className="my-4 text-justify">
            Grâce à ma formation auprès d'OpenClassrooms, j'ai développé une forte attirance pour le{" "}
            <strong>front-end</strong> : j'aime tout particulièrement traduire en code des maquettes UI/UX et voir leur
            design prendre vie.
          </p>

          <p className="my-4 text-justify">
            Au-delà de mes compétences solides en HTML, CSS et JavaScript, je me spécialise actuellement dans le
            framework <strong>ReactJS</strong> pour créer des interfaces utilisateur dynamiques et modernes.
          </p>
          <div className="flex">
            <Button
              to="/contact"
              color="transparent"
              text="Me contacter"
              className="mb-6"
            />
            <Button
              to="/contact"
              color="hover"
              text="Mon CV"
              icon={<FiDownload className="btn-icon" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
