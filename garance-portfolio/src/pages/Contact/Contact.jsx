import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub, FaRegEnvelope, FaRegUser, FaAddressCard } from "react-icons/fa";
import profil from "../../assets/Garance-profil.jpg";
import { FormContact } from "../../components";

export default function Contact() {
  return (
    <section className="p-10">
      <div className="contact-container">
        <div className="lg:flex lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h1>Parlons ensemble</h1>
            <p className="mt-4">Dites-moi tout !</p>
            {/* <!-- Form --> */}
            <FormContact />
          </div>
          <div className="ml-20">
            <img
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-80 h-80"
              src={profil}
              alt=""
            />
            <div className="lg:flex lg:flex-col justify-center items-center mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <FaRegUser className="w-6 h-6 mx-2 text-martinique-500 dark:text-martinique-400" />
                <span className="mx-2 ">Garance Defrel</span>
              </p>
              <p className="flex items-start -mx-2">
                <FaAddressCard className="w-6 h-6 mx-2 text-martinique-500 dark:text-martinique-400" />
                <span className="mx-2">Créteil - France</span>
              </p>
              <p className="flex items-start -mx-2">
                <FaRegEnvelope className="w-6 h-6 mx-2 text-martinique-500 dark:text-martinique-400" />
                <span className="mx-2">garance.defrel@outlook.com</span>
              </p>
            </div>
            <div className="lg:flex lg:flex-col items-center mt-6 md:mt-8">
              <p>Mes réseaux sociaux</p>
              <div className="flex mt-4 -mx-1.5 ">
                <Link
                  className="icon-color"
                  href="#">
                  <FaLinkedin className="w-8 h-8" />
                </Link>
                <Link
                  className="icon-color"
                  href="#">
                  <FaGithub className="w-8 h-8" />
                </Link>
                <Link
                  className="icon-color"
                  href="#">
                  <FaTwitter className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
