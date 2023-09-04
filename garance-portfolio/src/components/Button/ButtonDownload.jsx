import React from "react";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import pdf from "../../assets/CV-Defrel-Garance.pdf";

export default function ButtonDownload() {
  return (
    <Link
      className="btn-hover"
      color="hover"
      to={pdf}
      download="Example-PDF-document"
      target="_blank"
      rel="noreferrer">
      Mon CV
      <FiDownload className="btn-icon" />
    </Link>
  );
}
