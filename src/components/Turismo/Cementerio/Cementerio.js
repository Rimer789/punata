import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fondo1 from "../../../imagenes/cementerio/1.jpg";
import fondo2 from "../../../imagenes/cementerio/2.jpg";
import fondo3 from "../../../imagenes/cementerio/3.jpg";
import fondo4 from "../../../imagenes/cementerio/4.jpg";

const Cementerio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [ fondo1,fondo2,fondo3,fondo4]; 

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
              El cementerio general de Punata, un hermoso patrimonio de la perla
              del valle, que aloja la memoria de nuestros antepasados punateños,
              como el Dr. Andrés María Torrico, Dr. Manuel Ascencio Villarroel,
              Dn. Nataniel Daza, Dn. Paulino Crespo, Dr. Rubén Ferrufino, Dr.
              Saúl Orellana, Prof. Atilio Sucre tataranieto del Mariscal Antoni
              José de Sucre y otros.
            </div>
          </div>
          <Link to="/culturaturismo">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Cementerio;
