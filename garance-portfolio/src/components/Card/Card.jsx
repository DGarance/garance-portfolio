import React from "react";
import { FaArrowRight } from "react-icons/fa";
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
          <h5 className="card-title">{title}</h5>
          <span className="card-subtitle">{subtitle}</span>
          <br />
        </div>
        <p className="card-description p-3">{description}</p>
      </div>
      <div className="button-container">
        <Button
          to={item}
          color="transparent"
          text="En savoir plus"
          icon={<FaArrowRight className="btn-icon" />}
        />
      </div>
    </div>
  );
}
