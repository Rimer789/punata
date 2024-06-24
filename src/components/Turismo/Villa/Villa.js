import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Villa.css";
import fondo1 from "../../../imagenes/villa/villa1.jpg";
import fondo2 from "../../../imagenes/villa/villa2.jpg";
import fondo3 from "../../../imagenes/villa/villa3.jpg";
import fondo4 from "../../../imagenes/villa/villa4.jpg";
import fondo5 from "../../../imagenes/villa/villa5.jpg";
import fondo6 from "../../../imagenes/villa/villa6.jpg";
import fondo7 from "../../../imagenes/villa/villa7.jpg";
import fondo8 from "../../../imagenes/villa/villa8.jpg";
import fondo9 from "../../../imagenes/villa/villa9.jpg";


const Villa = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    fondo1, fondo2, fondo3, fondo4, fondo5, fondo6, fondo7, fondo8, fondo9
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="villa">
      <div className="villa-container">
        <div className="villa-content">
          <div className="villa-gallery">
            <img src={images[currentImageIndex]} alt="houses" />
          </div>
          <div className="villa-title">
            <div className="dess">
              La comunidad de la Villa es una zona turística apta para un día de
              recreación con la familia y los amigos, donde podrás encontrar
              molinos antiguos de agua y está ubicada en la antigua carretera
              Santa Cruz.
            </div>
          </div>
          <Link to="/culturaturismo">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Villa;
