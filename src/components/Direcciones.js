import React, { useState } from "react";
import data from "../listas/direcciones.json";
import "./estilos/Direcciones.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaMoneyBillAlt, FaBalanceScale, FaCity, FaTools, FaClipboardList, FaLeaf, FaUser } from 'react-icons/fa'; // Importa los iconos de React Icons
import { Link } from "react-router-dom";
import { sliderSettings } from "./common";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import mediumImage from "./escudopunata.jpg"; 
import pdf4 from "./ORGANIGRAMA2024.pdf";


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
    <div id="organigrama" className="dir-wrapper">
      <br/>
      <br/>
      <br/>
      <div id="organigrama" className="dir-container">
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
        <div className="pdf-org ">
            <a href={pdf4} target="_blank" rel="noopener noreferrer">
              Ver Organigrama
            </a>
          </div>
      </div>
      <div id="organigrama" className="dir-content">
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


