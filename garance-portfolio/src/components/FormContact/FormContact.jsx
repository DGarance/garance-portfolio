import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Notification from "../Notification/Notification";

export default function FormContact() {
  const form = useRef();
  const [notification, setNotification] = useState(null);
  const [formIncomplete, setFormIncomplete] = useState(false);
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setFormIncomplete(true); // Définit la variable d'état sur true
      return;
    }
    if (!nameRegex.test(name)) {
      setNotification({ message: "Veuillez entrer un nom valide.", type: "error" });
      return;
    }

    if (!emailRegex.test(email)) {
      setNotification({ message: "Veuillez entrer une adresse e-mail valide.", type: "error" });
      return;
    }

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        setNotification({ message: "Votre e-mail a été envoyé avec succès !", type: "success" });
      })
      .catch((error) => {
        setNotification({
          message: "Une erreur s'est produite lors de l'envoi de l'e-mail. Veuillez réessayer.",
          type: "error",
        });
      });
  };
  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div>
      {formIncomplete && (
        <Notification
          message="Veuillez remplir tous les champs avant d'envoyer."
          type="error"
          onClose={() => setFormIncomplete(false)}
        />
      )}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={closeNotification}
        />
      )}

      <form
        className="mt-12"
        ref={form}
        onSubmit={sendEmail}>
        <div className="-mx-2 md:items-center md:flex">
          <div className="flex-1 px-2">
            <label
              for="user_name"
              className="form-label">
              Nom et Prénom
            </label>
            <input
              className="form-input"
              type="text"
              name="user_name"
              placeholder="John Doe"
              id="user_name"
            />
          </div>
          <div className="flex-1 px-2 mt-4 md:mt-0">
            <label
              for="user_email"
              className="form-label">
              Votre adresse mail
            </label>
            <input
              className="form-input"
              type="email"
              name="user_email"
              placeholder="johndoe@example.com"
              id="user_email"
            />
          </div>
        </div>
        <div className="w-full mt-4">
          <label
            for="message"
            className="form-label">
            Message
          </label>
          <textarea
            className="form-textarea"
            placeholder="Message"
            name="message"
            id="message"
          />
        </div>
        <input
          className="form-submit"
          color="contact"
          type="submit"
          value="Envoyer"
        />
      </form>
    </div>
  );
}
