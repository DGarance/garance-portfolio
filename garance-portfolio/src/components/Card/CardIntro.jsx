import React from "react";

export default function CardIntro({ icon, title, subtitle }) {
  return (
    <div className="card-intro">
      <span className="card-icon">{icon}</span>
      <p className="mb-2 text-sm text-center font-medium">{title}</p>
      <p className="mb-2 text-xs text-center">{subtitle}</p>
    </div>
  );
}
