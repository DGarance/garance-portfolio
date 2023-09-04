import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";
import { FaWifi, FaGithub, FaCheckCircle } from "react-icons/fa";
import { Tag, Button } from "../../components";

export default function Projects() {
  const params = useParams();
  const work = projects.find((work) => work.id === params.id);
  const tags = work && work.tags;
  const competences = work && work.competences;
  const listCompetences =
    work &&
    competences.map((item, index) => (
      <li
        className="flex gap-x-3 text-primary-950 dark:text-primary-50"
        key={index}>
        <FaCheckCircle
          className="icon-color w-6 h-6"
          aria-hidden="true"
        />
        {item}
      </li>
    ));

  if (!work) {
    return <div>Projet non trouvé</div>; // Gère le cas où le projet n'est pas trouvé
  }

  return (
    work && (
      <section key={params.id}>
        <div className="project-container ">
          <div className="project-grid ">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold ">Parcours Développeur Web OpenClassrooms</p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary-600 sm:text-4xl">{work.title}</h1>
                  <h2 className="mt-6 text-primary-600 dark:text-primary-400">Contexte</h2>
                  <p>{work.contexte}</p>
                </div>
                <div className="mt-6">
                  {tags.map((tags) => (
                    <Tag
                      key={tags}
                      tags={tags}></Tag>
                  ))}
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className="w-full h-full max-w-full rounded-xl bg-white shadow-xl ring-1 ring-gray-400/10 sm:w-full"
                src={work.brand}
                alt="logo de marque"
              />
              <div className="mt-8 text-center">
                <Button
                  to={work.github}
                  className="btn-hover hover:underline"
                  color="hover"
                  text="Github"
                  icon={<FaGithub className="w-5 h-5 ml-2 -mr-1" />}
                />
                <Button
                  to={work.live}
                  className="btn-hover hover:underline"
                  color="hover"
                  text="Live"
                  icon={<FaWifi className="w-5 h-5 ml-2 -mr-1" />}
                />
              </div>
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div>
                  <h3 className="my-10">Objectifs d'apprentissage</h3>
                  <p>{work.apprentissage}</p>
                  <h3 className="my-10">Compétences évaluées</h3>
                  <ul className="mt-10 space-y-5 ">{listCompetences}</ul>
                  <h3 className="my-10 ">Bilan</h3>
                  <p>{work.bilan}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
