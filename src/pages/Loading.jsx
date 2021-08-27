// Dependencies
import React, { useEffect, useState } from "react";

import Nav from "../components/Nav";

export default function Loading() {
  const [arrayWord, setArrayWord] = useState(null);
  const word = "cargando...";

  const wordToArray = () => {
    setArrayWord(Array.from(word));
  };

  useEffect(() => {
    wordToArray();
  }, []);

  return (
    <section className="container-loading">
      <Nav />
      <div className="container-loading__loader">
        {arrayWord &&
          arrayWord.map((item, index) => {
            return (
              <span
                key={index}
                style={{ animationDelay: `calc(0.1s * ${index})` }}
              >
                {item}
              </span>
            );
          })}
      </div>
    </section>
  );
}
