import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderSettings } from "../../../components/common";
import datos from "../../../listas/colegios.json";
import { FaBalanceScale, FaDollarSign, FaClipboardList } from "react-icons/fa";



const DesarrolloHumano = () => {
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
    <section id="value" className="v-wrapper">
      <button className="boton-flotante"><Link to="/direcciones">Atras</Link></button>
      <div className="dh-container">
        <div className="text-containere">
          <div className="text-large">
            Direccion de <br /> DESARROLLO HUMANO
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
      <div className="paddings innerWidth g-container">
        <div className="paddings innerWidth s-container">
          <div className="flexColStart r-head">
            <span className="orangeText">UNIDADES EDUCATIVAS</span>
          </div>
          <Swiper {...sliderSettings}>
            <SlideNextButton />
            {datos.map((card, i) => (
              <SwiperSlide key={i} >
                <div className="flexColStart r-cardss">
                  <span className="">
                    {card.unidad}
                  </span>
                  <span className="">
                    {card.director}
                  </span>
                  <span className="">
                  </span>
                  <span className="">
                    {card.nivel}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

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

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};

export default DesarrolloHumano;