import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function FormContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      window.alert("Veuillez remplir tous les champs avant d'envoyer.");
      return;
    }

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey);

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        window.alert("Votre e-mail a été envoyé avec succès !");
      })
      .catch((error) => {
        console.log(error.text);
        window.alert("Une erreur s'est produite lors de l'envoi de l'e-mail. Veuillez réessayer.");
      });
  };

  return (
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
  );
}
