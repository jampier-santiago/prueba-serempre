// Dependencies
import React, { useContext } from "react";
import { Price } from "../context/Price";

export default function Footer() {
  const price = useContext(Price);

  return (
    <footer className="container-footer">
      <section className="section-left">
        <h3>Free Shipping</h3>
        <h3>2 years warranty</h3>
      </section>
      <section className="section-right">
        <div className="container-footer__info">
          <h2>${price}</h2>
          <span>Need financing? Learn more </span>
        </div>
        <div className="container-footer__button">
          <span>Buy now</span>
        </div>
      </section>
    </footer>
  );
}
