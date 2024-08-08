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
    <section id="value" className="v-wrapperp">
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
            Es la instancia técnica encargado de planificar, dirigir, evaluar, coordinar y programar las actividades de la Dirección, en la actualización del PTDI, PEI, POA  y la realización de estudios y elaboración de proyectos finales que contribuyan al desarrollo Municipal:{" "}
          </div>
          <div className="contacto">
            <p className="titulo">Teléfono:</p>
            <p className="contenido">********</p>
            <p className="titulo">Dirección:</p>
            <p className="contenido">*************************</p>
          </div>
        </div>
      </div>

      <div className="additional-content-ingre">
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
          <br />
          <br />
        </div>
        <div className="descre-p">
           <h2> Dirección de Planificación  </h2>   <br />
           <h3> Es responsable de:</h3> <br />
           <ul> 
            <li>	Dirigir la elaboración y actualización de planes municipales de mediano y largo plazo (PTDI, PEI, POA y OTROS) en cumplimiento a la planificación municipal y normativa vigente.</li> 
            <li> Realizar la identificación, selección, factibilidad y preparación de proyectos de desarrollo municipal, sobre la base de normas, procedimientos y criterios establecidos para este propósito.</li>
            <li>	Participar en la elaboración de la matriz de proyectos de Inversión Pública del Plan Operativo Anual en coordinación con el/la responsable de SISIN WEB.</li>
            <li>	Coordinar de forma oportuna y eficiente las actividades y/o trabajo con las demás unidades dependientes del Gobierno Autónomo Municipal de Punata a objeto de tomar acciones técnicas, legales y/o administrativas concernientes a los intereses de la Institución.</li>
            <li>	Generar información gerencial en base al SIGEP, SISIN WEB Y SICOES.</li>
            </ul>
          </div>
        <div className="mision">Planificacion y estrategia de Gobierno Autónomo municipal de Punata</div>
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
