import React from "react";
import { Hero, Intro, Skills, CTA } from "../../section";

export default function Home({ darkMode }) {
  return (
    <section>
      {/* Hero Section */}
      <Hero darkMode={darkMode} />
      {/* Présentation*/}
      <Intro />
      {/* Compétences*/}
      <Skills darkMode={darkMode} />
      {/* Call to Action */}
      <CTA />
    </section>
  );
}
