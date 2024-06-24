import React, { useState, useEffect } from "react";
import "./estilos/Inicio.css";
import background1 from "../imagenes/inicio/portada1.jpg";
import background2 from "../imagenes/inicio/portada2.jpg";
import background3 from "../imagenes/inicio/portada3.jpg";
import background4 from "../imagenes/inicio/portada4.jpg";
import background5 from "../imagenes/inicio/portada5.jpg";
import background7 from "../imagenes/inicio/portada7.jpg";

const Inicio = () => {
  const [backgroundImage, setBackgroundImage] = useState(0);
  const [nombrelugar] = useState([
    "Ciclo vía en la avenida Gualberto Villarroel",
    "Arco de bienvenida al municipio de Punata",
    "Estatuas de madera en el parque",
    "Plaza 18 de mayo",
    "Templo San Juan Bautista",
    "Centro de la plaza 18 de mayo",
  ]);

  const backgrounds = [
    background1,
    background2,
    background3,
    background4,
    background5,
    background7,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section
      id="hero"
      className="inicio-container"
      style={{
        backgroundImage: `url(${backgrounds[backgroundImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <head>
        <title> GOBIERNO AUTÓNOMO MUNICIPAL DE PUNATA</title>
        <meta name="description" content="Satisfacer las necesidades y aspiraciones de desarrollo de la
    población del municipio de Punata, direccionando los servicios
    públicos municipales hacia la mejora de su calidad de vida" />
      </head>
      <div className="seccion-container">
        <div className="titu-inicio">
          GOBIERNO AUTÓNOMO <br /> MUNICIPAL DE PUNATA
        </div>
        <div className="nombrelugar">
          {nombrelugar[backgroundImage]}
        </div>
      </div>
    </section>
  );
};

export default Inicio;
