// Dependecies
import React from "react";

// Components
import Nav from "../components/Nav";
import Slider from "../components/Slider";

export default function Main() {
  return (
    <section className="container-page">
      <Nav />
      <Slider />

      <section className="product-title">
        <div className="product-title__alert">
          <span>New release</span>
        </div>
        <div className="product-title__title">
          <h2>MOMENTUM True Wireless 2</h2>
          <h3>Earbuds that put sound first</h3>
        </div>
        <div className="product-title__price">
          <small>Starting at</small>
          <h3>$295.95</h3>
        </div>
      </section>
    </section>
  );
}
