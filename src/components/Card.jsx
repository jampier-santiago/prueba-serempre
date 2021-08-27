// Props
// Title: Debe llegar el titulo de la tarjeta
// Text: Debe llegar el texto para la tarjeta
// Price: Debe llegar el precio, en caso de que la tarjeta lo necesite

// Depencies
import React, { useState } from "react";

export default function Card({ title, text, price }) {
  const [active, setActive] = useState(false);

  // Función para colocar la clase active a la tarjeta
  function addClassActive() {
    setActive(!active);
  }

  return (
    <section
      className={active ? "container-card active" : "container-card"}
      onClick={addClassActive}
    >
      <div
        className="section-left"
        style={price ? { width: "75%" } : { width: "100%" }}
      >
        <div className="container-card__title">
          <h2>{title}</h2>
        </div>
        <div className="container-card__text">
          <p>{text}</p>
        </div>
      </div>
      <div className="section-right">
        <span>{price}</span>
      </div>
    </section>
  );
}
