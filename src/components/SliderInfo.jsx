// Dependencies
import React, { useRef } from "react";

// Assets
import iconHand from "../assets/images/iconHand.png";
import iconActiveNoise from "../assets/images/iconActiveNoise.png";
import iconEqualizer from "../assets/images/iconEqualizer.png";

export default function SliderInfo() {
  // Controles
  const control1 = useRef();
  const control2 = useRef();
  const control3 = useRef();

  // Ventanas
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
    <section className="container-slider-info">
      <div className="container-slider-info__controls">
        <div className="control-slider-info">
          <h3
            className="active"
            ref={control1}
            onClick={() => addClassActive(1)}
          >
            Overview
          </h3>
        </div>

        <div className="control-slider-info">
          <h3 ref={control2} onClick={() => addClassActive(2)}>
            Features
          </h3>
        </div>

        <div className="control-slider-info">
          <h3 ref={control3} onClick={() => addClassActive(3)}>
            What's in the box?
          </h3>
        </div>
      </div>
      <div className="container-slider-info__window">
        <div className="window-slider-info" ref={window1}>
          <p>
            For the past 75 years, Sennheiser has put sound first. The new
            MOMENTUM True Wireless 2 is no different. Thanks to leading audio
            technology and innovation, these new earbuds deliver the best
            listening experience anytime, anywhere. With improved ergonomics
            designed for full day wearing and refined touch controls for a more
            personalised experience, they have been finely crafted for the most
            discerning listener and aim to simplify your life by enhancing your
            everyday.
          </p>
          <div className="icons">
            <img src={iconHand} alt="Icono de una mano" />
            <span>Customizable Touch Controls </span>
          </div>
          <div className="icons">
            <img src={iconActiveNoise} alt="Icono de una mano" />
            <span>Customizable Touch Controls </span>
          </div>
          <div className="icons">
            <img src={iconEqualizer} alt="Icono de una mano" />
            <span>Customizable Touch Controls </span>
          </div>
        </div>
        <div className="window-slider-info" ref={window2}>
          <p>
            For the past 75 years, Sennheiser has put sound first. The new
            MOMENTUM True Wireless 2 is no different. Thanks to leading audio
            technology and innovation, these new earbuds deliver the best
            listening experience anytime, anywhere. With improved ergonomics
            designed for full day wearing and refined touch controls for a more
            personalised experience, they have been finely crafted for the most
            discerning listener and aim to simplify your life by enhancing your
            everyday.
            <br />
            <strong>Features</strong>
          </p>
          <div className="icons">
            <img src={iconHand} alt="Icono de una mano" />
            <span>Customizable Touch Controls </span>
          </div>
          <div className="icons">
            <img src={iconActiveNoise} alt="Icono de una mano" />
            <span>Customizable Touch Controls </span>
          </div>
          <div className="icons">
            <img src={iconEqualizer} alt="Icono de una mano" />
            <span>Customizable Touch Controls </span>
          </div>
        </div>
        <div className="window-slider-info" ref={window3}>
          <p>
            For the past 75 years, Sennheiser has put sound first. The new
            MOMENTUM True Wireless 2 is no different. Thanks to leading audio
            technology and innovation, these new earbuds deliver the best
            listening experience anytime, anywhere. With improved ergonomics
            designed for full day wearing and refined touch controls for a more
            personalised experience, they have been finely crafted for the most
            discerning listener and aim to simplify your life by enhancing your
            everyday.
            <br />
            <strong>What's in the box?</strong>
          </p>
          <div className="icons">
            <img src={iconHand} alt="Icono de una mano" />
            <span>Customizable Touch Controls </span>
          </div>
          <div className="icons">
            <img src={iconActiveNoise} alt="Icono de una mano" />
            <span>Customizable Touch Controls </span>
          </div>
          <div className="icons">
            <img src={iconEqualizer} alt="Icono de una mano" />
            <span>Customizable Touch Controls </span>
          </div>
        </div>
      </div>
    </section>
  );
}
