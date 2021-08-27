// Dependecies
import React, { useEffect, useState, useMemo } from "react";

// Components
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import SliderInfo from "../components/SliderInfo";
import Card from "../components/Card";
import Footer from "../components/Footer";

// Assets
import iconHand from "../assets/images/iconHand.png";
import iconActiveNoise from "../assets/images/iconActiveNoise.png";
import iconEqualizer from "../assets/images/iconEqualizer.png";

// Context
import Price from "../context/Price";
import Loading from "./Loading";

export default function Main() {
  const [price, setPrice] = useState(295.95);
  const priceData = useMemo(() => ({ price, setPrice }), [price]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Serempre";

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (!loading) {
    return (
      <>
        <Price.Provider value={priceData}>
          <section className="container-page">
            <Nav />

            <main className="main">
              <div className="section-top">
                <Slider />
                <section className="container-icons">
                  <div className="icon">
                    <img src={iconHand} alt="Icono de una mano" />
                    <span>Customizable Touch Controls</span>
                  </div>
                  <div className="icon">
                    <img src={iconActiveNoise} alt="Icono de touch" />
                    <span>Active Noise Cancellation</span>
                  </div>
                  <div className="icon">
                    <img src={iconEqualizer} alt="Icono de hondas auditivas" />
                    <span>Built-in Equalizer</span>
                  </div>
                </section>
              </div>

              <div className="section-bottom">
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

                <SliderInfo />

                <section className="container-your-finish">
                  <div className="container-your-finish__title">
                    <h2>Choose your finish.</h2>
                  </div>
                  <div className="container-your-finish__cards">
                    <Card
                      title="Ivory White"
                      text="For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True. "
                    />
                    <Card
                      title="Matte Black"
                      text="Of all of the celestial bodies that capture our attention and fascination as astronomers."
                    />
                  </div>
                </section>

                <section className="container-add-extended">
                  <div className="container-add-extended__title">
                    <h2>Would you like to add extended.</h2>
                  </div>
                  <div className="container-add-extended__cards">
                    <Card
                      title="2 years coverage"
                      text="For the past 75 years, Sennheiser has put sound first."
                    ></Card>
                    <Card
                      title="3 years coverage"
                      text="For the past 75 years, Sennheiser has put sound first."
                      valuePrice="+ $75"
                    ></Card>
                  </div>
                </section>

                <section className="container-features">
                  <div className="container-features__title">
                    <h2>features</h2>
                  </div>
                  <div className="container-features__cards">
                    <Card title="Voice Assistant support"></Card>
                    <Card
                      title="Customizable controls"
                      valuePrice="+ $25"
                    ></Card>
                  </div>
                </section>

                <section className="container-specifications">
                  <div className="container-specifications__title">
                    <h2>Specifications.</h2>
                  </div>
                  <div className="container-specifications__table">
                    <div className="table__row">
                      <h3>Dimensions</h3>
                      <span>
                        76.8 x 43.8 x 34.7 mm (earbuds and charging case)
                      </span>
                    </div>
                    <div className="table__row">
                      <h3>USB Standard</h3>
                      <span>USB-C</span>
                    </div>
                    <div className="table__row">
                      <h3>Power supply</h3>
                      <span>Sennheiser 7mm dynamic driver</span>
                    </div>
                    <div className="table__row">
                      <h3>Frequency response (Microphone)</h3>
                      <span>100 Hz to 10 kHz</span>
                    </div>
                    <div className="table__row">
                      <h3>Frequency response</h3>
                      <span>5 - 21,000 Hz</span>
                    </div>
                    <div className="table__row">
                      <h3>Noise cancellation</h3>
                      <span>Single-Mic ANC per earbud side</span>
                    </div>
                  </div>
                </section>
              </div>
            </main>
          </section>
          <Footer />
        </Price.Provider>
      </>
    );
  } else {
    return <Loading />;
  }
}
