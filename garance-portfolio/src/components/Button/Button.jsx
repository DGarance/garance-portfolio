import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, color, icon, to }) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      title="link"
      to={to}
      className={`btn-${color}`}>
      {text}
      {icon}
    </Link>
  );
}
