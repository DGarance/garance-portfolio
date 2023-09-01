import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Button from "../Button/Button";

export default function Card({ cover, title, subtitle, description, item }) {
  return (
    <div className="card-wrapper">
      <div>
        <img
          className="card-image"
          src={cover}
          alt="projet"
        />
        <div className="p-3 flex flex-col items-center">
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">{subtitle}</p>
          <br />
        </div>
        <p className="card-description p-3">{description}</p>
      </div>
      <div className="button-container">
        <Button
          to={item}
          color="transparent"
          text="En savoir plus"
          icon={<FiArrowRight className="btn-icon" />}
        />
      </div>
    </div>
  );
}
