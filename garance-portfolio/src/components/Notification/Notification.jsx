import React from "react";

export default function Notification({ message, type, onClose }) {
  return (
    <div className={`m-4 p-4 rounded ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
      {message}
      <button
        className="ml-4"
        onClick={onClose}>
        Fermer
      </button>
    </div>
  );
}
