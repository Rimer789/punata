import React from "react";
import { Helmet } from "react-helmet";
import "./estilos/Informacion.css";
import alcalde from "../imagenes/alcaldia/alcalde.JPG";
import escudo from "../imagenes/alcaldia/escudopunata.jpg";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import mediumImage from "./escudopunata.jpg";
import pdf2 from "../components/Direcciones/Planificacion/PEI.pdf";
import pdf3 from "../components/Direcciones/Planificacion/PTDI.pdf";
import pdf4 from "../components/Direcciones/Planificacion/POA.pdf";
import pdf5 from "../components/Direcciones/Planificacion/AGENDA.pdf";

const Informacion = () => {
  return (
    <div id="value" className="v-wrapper">
      <Helmet>
        <title>Información - Gobierno Autónomo Municipal de Punata</title>
        <meta name="description" content="Conozca más sobre el Gobierno Municipal de Punata, nuestro alcalde, el concejo municipal, y nuestras misiones y visiones para el desarrollo de la comunidad." />
      </Helmet>
      <div className="v-container">
        <div className="text-container">
          <div className="text-large">Gobierno municipal</div>
          <div className="text-small">Alcaldía de Punata</div>
        </div>
      </div>
      <div className="v-container2" id="alcalde">
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
      <div className="v-container22" id="concejo">
        <div className="alcalde-container">
          <div className="alcalde-title">Concejo Municipal</div>
          <img
            src={alcalde}
            alt="Foto del alcalde"
            className="concejo-img"
          />
          <img
            src={alcalde}
            alt="Foto del alcalde"
            className="concejo-img"
          />
          <img
            src={alcalde}
            alt="Foto del alcalde"
            className="concejo-img"
          />
          <img
            src={alcalde}
            alt="Foto del alcalde"
            className="concejo-img"
          />
          <img
            src={alcalde}
            alt="Foto del alcalde"
            className="concejo-img"
          />
          <img
            src={alcalde}
            alt="Foto del alcalde"
            className="concejo-img"
          />
        </div>
      </div>
      <div className="v-container3" id="mision">
        <div className="escudo-container">
          <img
            src={escudo}
            alt="Escudo del municipio"
            className="escudo-img"
          />
        </div>
        <div className="mision">Misión</div>
        <div className="descr-mision">
          Satisfacer las necesidades y aspiraciones de desarrollo de la
          población del municipio de Punata, direccionando los servicios
          públicos municipales hacia la mejora de su calidad de vida, en un
          contexto de transparencia, eficacia, eficiencia, calidad y
          oportunidad.
        </div>
        <div className="vision">Visión</div>
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
      <div className="v-container33" id="estrategia">
        <div className="estrategia">Planificacion y estrategia municipal</div>
        <div className="pdf-grid">
          <div className="pdf-item ">
            <a href={pdf2} target="_blank" rel="noopener noreferrer">
              <div className="pdf-thumbnail pdf-thumbnail-2">PDF</div>
              <div className="pdf-name">PLAN ESTRATÉGICO INSTITUCIONAL DEL MUNICIPIO DE PUNATA 2021-2025</div>
            </a>
          </div>
          <div className="pdf-item ">
            <a href={pdf3} target="_blank" rel="noopener noreferrer">
              <div className="pdf-thumbnail pdf-thumbnail-3">PDF</div>
              <div className="pdf-name">PLAN TERRITORIAL DE DESARROLLO INTEGRAL PARA VIVIR BIEN DEL MUNICIPIO DE PUNATA 2021-2025</div>
            </a>
          </div>
          <div className="pdf-item ">
            <a href={pdf4} target="_blank" rel="noopener noreferrer">
              <div className="pdf-thumbnail pdf-thumbnail-4">PDF</div>
              <div className="pdf-name">PLAN OPERATIVO ANUAL GESTIÓN 2024</div>
            </a>
          </div>
          <div className="pdf-item">
            <a href={pdf5} target="_blank" rel="noopener noreferrer">
              <div className="pdf-thumbnail pdf-thumbnail-5">PDF</div>
              <div className="pdf-name">AGENDA URBANA PUNATA</div>
            </a>
          </div>
        </div>
      </div>
      <footer className="f-wrapper">
        <div className="dividir">
          <div className="footer-section">
            <div className="title">Gobierno Autónomo Municipal de Punata</div>
            <div className="description">Oficina central: Plaza Principal 18 de Mayo, Acera Norte </div>
            <div className="description">Lunes-Viernes, de 8:00 AM a 12:00 PM y de 1:30 PM a 5:30 PM</div>
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

export default Informacion;
