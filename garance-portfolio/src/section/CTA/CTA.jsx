import React from "react";
import { Button } from "../../components";
import { FiSend } from "react-icons/fi";

export default function CTA() {
  return (
    <section>
      <div className="cta-container">
        <h2>Découvrez mon portfolio et prenez contact avec moi !</h2>
        <div className="mt-6">
          <Button
            className="btn-transparent"
            to="/portfolio"
            color="transparent"
            text="Mon portfolio"
          />
          <Button
            to="/contact"
            className="btn-hover"
            color="hover"
            text="Contactez-moi"
            icon={<FiSend className="btn-icon" />}
          />
        </div>
      </div>
    </section>
  );
}
