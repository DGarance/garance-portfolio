import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaRegEnvelope, FaRegUser, FaAddressCard } from "react-icons/fa";
import profil from "../../assets/Garance-profil.jpg";
import { FormContact, ButtonIcon} from "../../components";

export default function Contact() {
  return (
    <section>
      <div className="contact-container">
        <div className="lg:flex lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h1>Parlons ensemble</h1>
            <p className="mt-4">Dites-moi tout !</p>
            {/* <!-- Form --> */}
            <FormContact />
          </div>
          <div className="md:ml-20">
            <img
              className="contact-img"
              src={profil}
              alt="profil de Garance Defrel"
            />
            <div className="contact-block-info">
              <p className="contact-text">
                <FaRegUser className="contact-icon" />
                <span className="mx-2 ">Garance Defrel</span>
              </p>
              <p className="contact-text">
                <FaAddressCard className="contact-icon" />
                <span className="mx-2">Créteil - France</span>
              </p>
              <p className="contact-text">
                <FaRegEnvelope className="contact-icon" />
                <span className="mx-2">garance.defrel@outlook.com</span>
              </p>
            </div>
            <div className="contact-social">
              <p>Mes réseaux sociaux</p>
              <div className="mt-4">
                <ButtonIcon
                  to="https://github.com/DGarance"
                  icon={
                    <FaGithub
                      aria-hidden="true"
                      role="img"
                      className="icon-color w-6 h-6 "
                    />
                  }
                />
                <ButtonIcon
                  to="https://www.linkedin.com/in/garance-defrel-3b269b279/"
                  icon={
                    <FaLinkedin
                      aria-hidden="true"
                      role="img"
                      className="icon-color w-6 h-6 "
                    />
                  }
                />
                <ButtonIcon
                  to="https://twitter.com/Akane9721"
                  icon={
                    <FaTwitter
                      aria-hidden="true"
                      role="img"
                      className="icon-color w-6 h-6 "
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
