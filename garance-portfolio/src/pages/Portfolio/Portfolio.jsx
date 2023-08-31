import React from "react";
import projects from "../../data/projects.json";
import { Link } from "react-router-dom";
import { Card } from "../../components";

export default function Portfolio() {
  return (
    <section>
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            <div className="portfolio-item">
              {projects.map((item, index) => (
                <div key={index}>
                  <Link to={`/portfolio/${item.id}`}>
                    <Card
                      cover={item.cover}
                      title={item.title}
                      subtitle={item.subtitle}
                      description={item.description}
                      item={`/portfolio/${item.id}`}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
