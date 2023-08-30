import React from "react";

export default function CardIntro({ icon, title, subtitle }) {
  return (
    <div className="card-intro">
      <i className="card-icon">{icon}</i>
      <p className="mb-2 text-sm text-center font-medium">{title}</p>
      <p className="mb-2 text-xs text-center">{subtitle}</p>
    </div>
  );
}
