import React from "react";
import { ProgressCircle } from "../../components";
import skillsData from "../../data/skills.json";

export default function Skills({ darkMode }) {
  return (
    <section>
      <div className="container mx-auto">
        <div className="text-center lg:my-16">
          <h2>Mes compétences</h2>
        </div>
        <div className="skills-display">
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <ProgressCircle
                key={index}
                skillName={skill.name}
                percentage={skill.percentage}
                icons={{
                  dark: skill.dark,
                  light: skill.light,
                }}
                alt={skill.alt}
                darkTheme={darkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
