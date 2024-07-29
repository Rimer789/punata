import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./estilos/Informacion.css";
import "./estilos/Gestion.css";
import "./estilos/Servicios.css";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import mediumImage from "./escudopunata.jpg";

const Servicios = () => {
    const servicios = [
        {
            title: "SERVICIO LEGAL INTEGRAL MUNICIPAL",
            description: "La Unidad del Servicio Legal Integral tiene como objeto las personas víctimas de todo tipo de violencia que establece la Ley 348 violencia con el fin de garantizar a las mujeres una vida digna y el ejerció pleno de sus derechos para vivir bien.",
            link: "/slim"
        },
        {
            title: "CENTRO DE ORIENTACION SOCIO LEGAL PARA EL ADULTO MAOR (COSLAM) ",
            description: "La Unidad del Centro Socio Legal para el Adulto Mayor, tiene como objeto las personas Adultas Mayores de 60 años, víctimas de todo tipo de violencia que establece la Ley 348 – la Ley 369, con el fin de garantizar una vida con dignidad y respeto, la protección contra todo forma de maltrato, discriminación en razón de edad, abandono y marginadad, el ejercicio pleno de sus derechos de las y los Adultos Mayores",
            link: "/coslam"

        },
        {
            title: "SOPORTE TÉCNICO DE SISTEMAS E INFORMÁTICA",
            description: "Garantizar el adecuado funcionamiento de las tecnologías de información y comunicación (software y hardware) en las diferentes Direcciones de la Alcaldía, Dirección Distrital y en todas las unidades educativas y centros de educación alternativa donde se tenga equipos de cómputo  (telecentros, pisos tecnológicos y kuas), así como para los Procesos del Sistema de Gestión de Calidad, mediante la administración y gestión de dominios y hosting para el desarrollo de las plataformas educativas para la modalidad virtual mediante la realización del mantenimiento preventivo de hardware y software con asistencia técnica preventiva y correctiva.",
            link: "/slin"

        },

    ];

    return (
        <div id="value" className="v-wrapper">
            <div className="v-containerSer">
                <br />
                <h2>Sud areas de Desarrollo Humano</h2>
                <br />
                <div className="services-grid">
                    {servicios.map((servicio, index) => (
                        <Link to={servicio.link} key={index}>
                            <ServiceCard servicio={servicio} />
                        </Link>
                    ))}
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

export default Servicios;

const ServiceCard = ({ servicio }) => {
    const [expanded, setExpanded] = useState(false);
  
    const toggleReadMore = () => {
      setExpanded(!expanded);
    };
  
    return (
      <div className="service-card">
        {servicio.icon}
        <h3>{servicio.title}</h3>
        <p className={expanded ? "" : "collapsed"}>
          {servicio.description}
          {servicio.description.length > 100 && (
            <span className="read-more" onClick={toggleReadMore}>
              {expanded ? " Leer menos" : " Leer más"}
            </span>
          )}
        </p>
      </div>
    );
  };