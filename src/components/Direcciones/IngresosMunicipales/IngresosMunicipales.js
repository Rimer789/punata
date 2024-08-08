import React from "react";
import { Link } from "react-router-dom";
import "./IngresoMunicipal.css"; 
import pdf1 from "./ley112.pdf";
import pdf2 from  "./ley194.pdf";
import orga from "./orga.jpg"

const IngresoMunicipal = () => {
  return (
    <section id="value" className="v-wrapper-ingre">
      <button className="boton-flotante-ingre">
        <Link to="/direcciones">Atrás</Link>
      </button>
      <div className="im-container-ingre">
        <div className="im-container">
          <div className="text-containere">
            <div className="text-large">
              Dirección de <br /> INGRESOS MUNICIPALES
            </div>
          </div>
          <div className="text-containeree">
            <div className="descre-mision">
              <p>La Dirección de Economía y Finanzas de la Alcaldía de Punata es
                responsable de establecer políticas fiscales y financieras para el
                municipio, así como de promover mejoras en los procesos operativos y
                administrativos relacionados con las finanzas públicas. Sus
                funciones incluyen:</p>
            </div>
            <div className="contacto">
              <p className="titulo">Teléfono:</p>
              <p >4572796-4571842</p> <br />
              <p className="titulo">Dirección:</p>
              <p >ambientes del Supermercado Evo Morales
                (Calle Dr. Jorge Rojas Tardío, Rotonda Av. Mayor Rocha en Punata)</p>
            </div>
          </div>
        </div>
        <div className="additional-content-ingre">
          <h2>Bienvenidos!!!</h2> <br />
          <p>
            Al subportal digital de la Dirección de Ingresos Municipales del
            Gobierno Autónomo Municipal de Punata. A través de esta plataforma en línea
            queremos llegar con información para facilitar trámites a los contribuyentes,
            centrados en dos pilares:
          </p>
          <br />
          <ol>
            <li>Transparencia en la recaudación de impuestos</li>
            <li>Aumento de las recaudaciones tributarias mediante la incorporación de nuevos contribuyentes</li>
          </ol>
          <h3>OBJETIVOS</h3>
          <p>
            Los objetivos a lograr por la Dirección de Ingresos Municipales están enmarcados dentro de la Misión y Visión Institucional y son:
            Planificar, organizar, dirigir coordinar, supervisar, controlar y delinear la aplicación de políticas para la captación de ingresos tributarios y no tributarios,
            ejerciendo facultades de recaudación, fiscalización, determinación y ejecución tributaria en el marco de las disposiciones legales vigentes.
          </p>
          <h3>ESTRUCTURA ORGANIZATIVA</h3>
          <p>
            La Dirección de Ingresos Municipales depende de la Secretaria General Administrativa y su estructura está conformada de la siguiente manera:
          </p>
          <div className="escudo-container">
          <img
            src={orga}
            alt="Escudo del municipio"
            className="escudo-imgi"
          />
        </div>
          <h4>NORMAS MUNICIPALES</h4>
          <br />
          <ul>
            <li>Ley Municipal No. 112 de Creación de Impuestos Municipales</li>
            <div className="pdf-item ">
            <a href={pdf1} target="_blank" rel="noopener noreferrer">
              <div className="pdf-thumbnaili pdf-thumbnaili-1">PDF</div>
              <div className="pdf-name">Ley Municipal No. 112 de Creación de Impuestos Municipales</div>
            </a>
          </div>
            <li>Ley Municipal No. 194 de Creación de Patentes Municipales</li>
            <div className="pdf-item ">
            <a href={pdf2} target="_blank" rel="noopener noreferrer">
              <div className="pdf-thumbnaili pdf-thumbnaili-2">PDF</div>
              <div className="pdf-name">Ley Municipal No. 194 de Creación de Patentes Municipales</div>
            </a>
          </div>
          </ul>

          <br />
          <h4>AREAS DE ATENCION AL CONTRIBUYENTE</h4>
          <p>
            La Dirección de Ingresos Municipales y sus áreas están ubicados actualmente en ambientes del Supermercado Evo Morales
            (Calle Dr. Jorge Rojas Tardío, Rotonda Av. Mayor Rocha en Punata) y son los siguientes:
          </p>
          <h5>LIQUIDADOR INMUEBLES </h5>
          <p>emite preliquidaciones (proformas) para pago del Impuesto Municipal a la Propiedad de Bienes Inmuebles y también Transferencia de Bienes Inmuebles que posteriormente cancelan en CAJA, y atiende los siguientes tramites:</p>
          <br />
          <ul>
            <li>Empadronamiento de Bienes Inmuebles</li>
            <li>Atención Registro de Transferencias de Bienes Inmuebles</li>
            <li>Certificaciones de Bases Imponibles de Bienes Inmuebles</li>
            <li>Registro de correcciones de datos en el padrón en base a informes técnicos correspondientes.</li>
          </ul>
          <br />
          <h5>LIQUIDADOR VEHICULOS</h5>
          <p>emite preliquidaciones para pago en bancos y atiende tramites de:</p>
          <br />
          <ul>
            <li>Inscripción Vehículos</li>
            <li>Transferencia Vehículos</li>
            <li>Cambios de Radicatorias</li>
            <li>Cambios de Servicios</li>
            <li>Duplicados de CRPVAs</li>
            <li>Duplicado de Placas</li>
            <li>Registro de observaciones justificados y Otros</li>
          </ul>
          <br />
          <h5>AUXILIAR INGRESOS, PATENTES</h5>
          <p>emite preliquidaciones (proformas) de las Patentes por Actividades Económicas Permanentes que posteriormente cancelan en CAJA, y atiende los siguientes tramites:</p>
          <br />
          <ul>
            <li>Empadronamiento de nuevas actividades económicas permanentes</li>
            <li>Otorgación de Licencias de Funcionamiento según requisitos</li>
            <li>Actualización de datos en el padrón por cambio de dirección, razón social u otros</li>
            <li>Atención de tramites de baja de la actividad económica por cierre, con la emisión de Resolución de Baja</li>
            <li>Extensión de certificaciones de uso de sitios o el que corresponda</li>
            <li>Liquidación (proformas) de patentes a la publicidad y propaganda</li>
          </ul>
          <br />
          <h5>INSPECTOR DE RECAUDACIONES</h5>
          <p>
            Realiza el control y seguimiento del cobro por concepto de patentes eventuales en martes de ferias y días ordinarios por uso de bienes de dominio público municipal;
            mercados, plazas, plazuelas, calzadas según la normativa correspondiente.
          </p>
          <h4>BUZON DE SUGERENCIAS</h4>
          <h4>TELEFONOS DE CONTACTOS: 4572796-4571842</h4>
        </div>
      </div>
    </section>
  );
};

export default IngresoMunicipal;
