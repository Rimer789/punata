import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./estilos/Inicio.css";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import mediumImage from "./escudopunata.jpg";

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

  const comunicados = [
    {
      titulo: "Comunicado 1",
      descripcion: "Descripción del comunicado 1.",
    },
    {
      titulo: "Comunicado 2",
      descripcion: "Descripción del comunicado 2.",
    },
    // Añade más comunicados según sea necesario
  ];

  return (
    <div> 
    <section
      id="hero"
      className="inicio-container"
      style={{
        backgroundImage: `url(${backgrounds[backgroundImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Helmet>
        <title>Gobierno Autónomo Municipal De Punata</title>
        <meta name="description" content="Satisfacer las necesidades y aspiraciones de desarrollo de la población del municipio de Punata, direccionando los servicios públicos municipales hacia la mejora de su calidad de vida" />
      </Helmet>
      <div className="seccion-container">
        <div>
        <div className="titu-inicio">
          GOBIERNO AUTÓNOMO <br /> MUNICIPAL DE PUNATA
        </div>
        <div className="nombrelugar">
          {nombrelugar[backgroundImage]}
        </div>
        </div>
        <div className="comunicados-container">
        {comunicados.map((comunicado, index) => (
          <div key={index} className="comunicado">
            <h2>{comunicado.titulo}</h2>
            <p>{comunicado.descripcion}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
    <footer className="f-wrapper">
        <div className="dividir">
          <div className="footer-section">
            <div className="title">Gobierno Autónomo Municipal de Punata</div>
            <div className="description">Oficina central: Plaza Principal 18 de Mayo, Acera Norte </div>
            <div className="description">Lunes-Viernes, de 8:00 AM a 12:00 PM y de 1:30 PM a 5:30 PM</div>
            <div className="description">Telf./Fax: 591-4-04-4577021 / +591-04-4572088</div>
          </div>
          <div className="image-container">
            <img src={mediumImage} alt="Imagen Mediana" className="medium-image" />
          </div>
        </div>
        <div className="flexCenter f-menu">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="iconn" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="iconn" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="iconn" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="iconn" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Inicio;
