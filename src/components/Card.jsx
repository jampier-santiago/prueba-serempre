// Props
// Title: Debe llegar el titulo de la tarjeta
// Text: Debe llegar el texto para la tarjeta
// valuePrice: Debe llegar el precio, en caso de que la tarjeta lo necesite

// Depencies
import React, { useState, useContext } from "react";
import Price from "../context/Price";

export default function Card({ title, text, valuePrice }) {
  const [active, setActive] = useState(false);
  const { price, setPrice } = useContext(Price);

  // Función para colocar la clase active a la tarjeta
  function addClassActive() {
    setActive(!active);

    if (valuePrice) {
      const temporaryPrice = valuePrice.split("$")[1];
      setPrice(price + parseInt(temporaryPrice));
    }
  }

  return (
    <section
      className={active ? "container-card active" : "container-card"}
      onClick={addClassActive}
    >
      <div
        className="section-left"
        style={valuePrice ? { width: "75%" } : { width: "100%" }}
      >
        <div className="container-card__title">
          <h2>{title}</h2>
        </div>
        <div
          className="container-card__text"
          style={text ? { display: "block" } : { display: "none" }}
        >
          <p>{text}</p>
        </div>
      </div>
      <div className="section-right">
        <span>{valuePrice}</span>
      </div>
    </section>
  );
}
