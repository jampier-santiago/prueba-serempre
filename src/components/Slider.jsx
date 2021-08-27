// Dependencies
import React, { useState, useRef, useMemo } from "react";

// Assets
import imagen1 from "../assets/images/imagen-1.png";
import imagen2 from "../assets/images/imagen-2.png";
import imagen3 from "../assets/images/imagen-3.png";

export default function Slider() {
  // Controles
  const control1 = useRef();
  const control2 = useRef();
  const control3 = useRef();

  //
  const window1 = useRef();
  const window2 = useRef();
  const window3 = useRef();

  // Funcion para agregar la clase active al control seleccionado
  function addClassActive(control) {
    if (control1.current.classList.contains("active")) {
      control1.current.classList.remove("active");
    }
    if (control2.current.classList.contains("active")) {
      control2.current.classList.remove("active");
    }
    if (control3.current.classList.contains("active")) {
      control3.current.classList.remove("active");
    }

    switch (control) {
      case 1:
        control1.current.classList.add("active");
        break;
      case 2:
        control2.current.classList.add("active");
        break;
      case 3:
        control3.current.classList.add("active");
        break;
    }

    moveSlider(control - 1);
  }

  // Funcion para mover el slider
  function moveSlider(position) {
    window1.current.style.transform = `translateX(-${position * 100}%)`;
    window2.current.style.transform = `translateX(-${position * 100}%)`;
    window3.current.style.transform = `translateX(-${position * 100}%)`;
  }

  return (
    <section className="container-slider">
      <div className="container-slider__slider">
        <div className="window-slider" ref={window1}>
          <img src={imagen1} alt="Imagen de los audifonos en su caja" />
        </div>
        <div className="window-slider" ref={window2}>
          <img src={imagen2} alt="Imagen de los audifonos" />
        </div>
        <div className="window-slider" ref={window3}>
          <img src={imagen3} alt="Imagen de los audifonos internamente" />
        </div>
      </div>

      <div className="container-slider__controls">
        <div
          className="control-slider active"
          ref={control1}
          onClick={() => {
            addClassActive(1);
          }}
        >
          <img src={imagen1} alt="Imagen de los audifonos en su caja" />
        </div>

        <div
          className="control-slider"
          ref={control2}
          onClick={() => {
            addClassActive(2);
          }}
        >
          <img src={imagen2} alt="Imagen de los audifonos" />
        </div>

        <div
          className="control-slider"
          ref={control3}
          onClick={() => {
            addClassActive(3);
          }}
        >
          <img src={imagen3} alt="Imagen de los audifonos internamente" />
        </div>
      </div>
    </section>
  );
}
