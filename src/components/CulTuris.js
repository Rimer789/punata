import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "./estilos/Turismo.css";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import "./estilos/Footer.css";
import mediumImage from "./escudopunata.jpg"; 
import { sliderSettings } from "./common";

const places = [
  {
    name: "LA VILLA",
    image: require("../imagenes/villa/villa7.jpg"),
    link: '/villa'
  },
  {
    name: "LA ERA",
    image: require('../imagenes/alcaldia/1.jpg'),
    link: '/era'
  },
  {
    name: "HACIENDA DE SIVINGANI",
    image: require("../imagenes/sivingani/6.jpg"),
    link: '/sivingani'
  },
  {
    name: "CEMENTERIO GENERAL",
    image: require("../imagenes/cementerio/1.jpg"),
    link: '/cementerio'
  },
];

const cultura = [
  {
    name: "EL ROSQUETE",
    image: require("../imagenes/rosquete/1.jpeg"),
    link: "/rosquete",
  },
  {
    name: "LA CHICHA PUNATEÑA",
    image: require("../imagenes/chicha/1.jpeg"),
    link: "/chicha",
  },
  {
    name: "El CUZQUEÑO",
    image: require("../imagenes/cusqueno/1.jpeg"),
    link: '/cusqueno'
  },
];

const Turismo = () => {
  return (
    <div id="turismo">
      <br/>
      <br/>
      <br/>
      <div className="section">
        <div className="section-title">LUGARES TURISTICOS</div>
        <Swiper {...sliderSettings} className="swiper-container">
          <SlideNextButton />
          {places.map((place, index) => (
            <SwiperSlide key={index}>
              <Link to={place.link}>
                <div className="slide">
                  <img src={place.image} alt={place.name} />
                  <span>{place.name}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="section">
        <div className="section-title">CULTURA PUNATEÑA</div>
        <Swiper {...sliderSettings} className="swiper-container">
          <SlideNextButton />
          {cultura.map((culturas, index) => (
            <SwiperSlide key={index}>
              <Link to={culturas.link}>
                <div className="slide">
                  <img src={culturas.image} alt={culturas.name} />
                  <span>{culturas.name}</span>
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
          <div className="description">Oficina central: Calle Sucre entre calle Antofagasta y calle Rafael Urquidi</div>
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

export default Turismo;
