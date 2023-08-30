import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import profil from "../../assets/Garance-profil.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function Intro() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="House"
                src={profil}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="relative flex items-center bg-primary-100 dark:bg-primary-900 text-center">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 "></span>
            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">Présentation</h2>
              <p className="mt-4">
                Après avoir travaillé pendant quelques années dans le secteur du service, j'ai choisi de me réorienter
                vers le monde du développement web, dans lequel j'ai trouvé ma vocation.
              </p>
              <Link>
                <Button
                  className="btn-hover items-center"
                  color="hover"
                  text="En savoir plus"
                  icon={<FaArrowRight className="w-5 h-5 ml-2 -mr-1" />}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
