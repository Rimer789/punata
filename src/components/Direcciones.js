import React, { useState } from "react";
import data from "../listas/direcciones.json";
import "./estilos/Direcciones.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaMoneyBillAlt, FaBalanceScale, FaCity, FaTools, FaClipboardList, FaLeaf, FaUser } from 'react-icons/fa'; // Importa los iconos de React Icons
import { Link } from "react-router-dom";
import { sliderSettings } from "./common";

const icons = [
  <FaMoneyBillAlt />,
  <FaBalanceScale />,
  <FaCity />,
  <FaTools />,
  <FaClipboardList />,
  <FaLeaf />,
  <FaUser />
];

const Direcciones = () => {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    if (zoom < 500) {
      setZoom(zoom + 30);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 100) {
      setZoom(zoom - 30);
    }
  };
  return (
    <div id="contact-us" className="dir-wrapper">
      <br/>
      <br/>
      <br/>
      <div className="dir-container">
        <div className="dir-header">
          <span className="dir-title">ORGANIGRAMA 2024 GAM PUNATA</span>
        </div>
        <div className="dir-image-container" style={{ overflow: "auto" }}>
          <div className="dir-zoom-buttons">
            <button onClick={handleZoomIn}>+</button>
            <button onClick={handleZoomOut}>-</button>
          </div>
          <img
            src={require("../imagenes/alcaldia/1.jpg")}
            alt="Organigrama"
            style={{
              width: `${zoom}%`
            }}
          />
        </div>
      </div>
      <div className="dir-content">
        <div className="dir-header">
          <span className="dir-title">DIRECCIONES MUNICIPALES</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <Link to={card.link}>
                <div className="dir-card">
                  <span className="dir-card-title">{card.name}</span>
                  <span className="dir-card-icon">{icons[i % icons.length]}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Direcciones;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="dir-button-container">
      <button onClick={() => swiper.slidePrev()} className="dir-button">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="dir-button">
        &gt;
      </button>
    </div>
  );
};


