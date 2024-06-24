import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fondo1 from "../../../imagenes/sivingani/1.jpg";
import fondo2 from "../../../imagenes/sivingani/2.jpg";
import fondo3 from "../../../imagenes/sivingani/3.jpg";
import fondo4 from "../../../imagenes/sivingani/4.jpg";
import fondo5 from "../../../imagenes/sivingani/5.jpg";
import fondo6 from "../../../imagenes/sivingani/6.jpg";


const Sivingani = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    fondo1, fondo2, fondo3, fondo4, fondo5, fondo6
  ]; // Agregamos las rutas de las imágenes

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambiamos el intervalo a 3 segundos

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
              La hacienda de Sivingani está ubicada en el distrito 4 de la
              comunidad de Sivingani, al noreste de la ciudad de Punata, a solo
              15minutos, cuya construcción data al año 1740. Concebida de dos
              plantas, con un patio central y una capilla, su arquitectura es
              esencialmente colonial. Salta a la vista el portón de medio punto,
              como el altillo, que denotan a la arquitectura colonial. Ni hablar
              de su capilla, ahí se resguarda la virgen de Santa Ana, además de
              pinturas coloniales y fotografías antiguas, muchas de ellas con un
              toque francés. En esta hacienda se filmó la película “Los Granos
              del Sol”, bajo la dirección de Ramón Rocha Monrroy, el año 2008.
            </div>
          </div>
          <Link to="/culturaturismo">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Sivingani;
