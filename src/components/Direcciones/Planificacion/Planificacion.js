import React from "react";
import { Link } from "react-router-dom";
import pdf1 from "./DIRECTOR.pdf";
import pdf2 from "./PEI.pdf";
import pdf3 from "./PTDI.pdf";
import pdf4 from "./POA.pdf";
import pdf5 from "./AGENDA.pdf";
import "./Planificacion.css"

const Planificacion = () => {
  return (
    <section id="value" className="v-wrapper">
        <Link to="/direcciones">
      <button className="boton-flotante">atras</button>
        </Link>
      <div className="dp-container">
        <div className="text-containere">
          <div className="text-large">
            Dirección de <br /> PLANIFICACIÓN
          </div>
        </div>
        <div className="text-containeree">
          <div className="descre-mision">
            La Dirección de Economía y Finanzas de la Alcaldía de Punata es
            responsable de establecer políticas fiscales y financieras para el
            municipio, así como de promover mejoras en los procesos operativos y
            administrativos relacionados con las finanzas públicas. Sus
            funciones incluyen:{" "}
          </div>
          <div className="contacto">
            <p className="titulo">Teléfono:</p>
            <p className="contenido">********</p>
            <p className="titulo">Dirección:</p>
            <p className="contenido">*************************</p>
          </div>
        </div>
      </div>

      <div className="eco-container">
        <div className="director-container">
          <div className="director-name">
            Lic. Waldo Héctor Requis Rojas <br />
            DIRECTOR DE PLANIFICACIÓN <br />
            GOBIERNO AUTÓNOMO MUNICIPAL DE PUNATA
          </div>
          <div className="pdf-itemr ">
            <a href={pdf1} target="_blank" rel="noopener noreferrer">
              <div className="pdf-thumbnail pdf-thumbnail-1">PDF</div>
              <div className="pdf-name">BIBLIOGRAFIA</div>
            </a>
          </div>
        </div>
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
    </section>
  );
};

export default Planificacion;
