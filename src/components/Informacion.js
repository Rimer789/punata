import React from "react";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import "./estilos/Informacion.css";
import alcalde from "../imagenes/alcaldia/alcalde.JPG";
import escudo from "../imagenes/alcaldia/escudopunata.jpg";


const Informacion = () => {
  return (
    <div id="value" className="v-wrapper">
      <div className="v-container">
        <div className="text-container">
          <div className="text-large">Gobierno municipal</div>
          <div className="text-small">Alcaldía de Punata</div>
        </div>
      </div>
      <div className="v-container2">
        <div className="alcalde-container">
          <div className="alcalde-title">Nuestro Alcalde</div>
          <img
            src={alcalde}
            alt="Foto del alcalde" 
            className="alcalde-img"
          />
          <div className="alcalde-name">Lic. Jaime Zeballos Vargas</div>
        </div>
        <div className="redes-sociales">
          <a href="link-de-facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="link-de-instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="link-de-twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="link-de-tiktok" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
      </div>
      <div className="v-container3">
        <div className="escudo-container">
          <img
            src={escudo}
            alt="Foto del alcalde"
            className="escudo-img"
          />
        </div>
        <div className="mision">Mision</div>
        <div className="descr-mision">
          Satisfacer las necesidades y aspiraciones de desarrollo de la
          población del municipio de Punata, direccionando los servicios
          públicos municipales hacia la mejora de su calidad de vida, en un
          contexto de transparencia, eficacia, eficiencia, calidad y
          oportunidad.{" "}
        </div>
        <div className="vision">Vision</div>
        <div className="descr-vision">
          Convertir a Punata en un hogar seguro, próspero, limpio y competitivo,
          articulando eficientemente el trabajo del Gobierno Autónomo Municipal
          y la sociedad punateña. Ser un municipio atractivo para las
          inversiones, con una infraestructura en armonía con la naturaleza, y
          una población integrada e identificada con su municipio. Establecer un
          entorno organizacional humano eficaz y transparente, donde la
          participación ciudadana sea fundamental para el desarrollo sostenible
          y la prosperidad de Punata.
        </div>
      </div>
    </div>
  );
};

export default Informacion;
