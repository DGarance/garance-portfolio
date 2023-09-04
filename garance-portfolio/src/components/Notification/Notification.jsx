import React from "react";

export default function Notification({ message, type, onClose }) {
  return (
    <div className={`notification-container ${type === "success" ? "notification-success" : "notification-error"}`}>
      {message}
      <button onClick={onClose}>Fermer</button>
    </div>
  );
}
