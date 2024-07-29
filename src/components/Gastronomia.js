import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "./estilos/Gastronomia.css";
import { sliderSettings } from "./common";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import mediumImage from "./escudopunata.jpg"; 

const places = [

  {
    name: "LOCAL CANTARITOS",
    image: require("../imagenes/gastronomia/cantaritos/3.jpg"),
    link: '/cantaritos'
  },
  {
    name: "LOCAL LAS K´JARAS",
    image: require("../imagenes/gastronomia/kjaras/1.jpg"),
    link: '/kjaras'
  },
  {
    name: "LOCAL LOS ARCHIS",
    image: require("../imagenes/gastronomia/archis/3.jpg"),
    link: '/archis'
  },
  {
    name: "LOCAL LA LLAJTA",
    image: require("../imagenes/gastronomia/llajta/4.jpg"),
    link: '/llajta'
  },
  {
    name: "LOCAL EL POBLADO",
    image: require("../imagenes/gastronomia/poblado/4.jpg"),
    link: '/poblado'
  },
  {
    name: "LOCAL DOÑA AURORA",
    image: require("../imagenes/gastronomia/aurora/3.jpg"),
    link: '/aurora'
  },
  {
    name: "LOCAL JOTA JOTITA",
    image: require("../imagenes/gastronomia/jotita/1.jpg"),
    link: '/jotita'
  },
  {
    name: "LOCAL 3 HERMANOS",
    image: require("../imagenes/gastronomia/hermanos/3.jpg"),
    link: '/hermanos'
  },
  {
    name: "LOCAL PAKAY HUASI",
    image: require("../imagenes/gastronomia/huasi/2.jpg"),
    link: '/pakayhuasi'
  },

];

const Gastronomia = () => {
  return (
    <div id="gastronomia" >
      <br/>
      <br/>
      <br/>
      <div className="section">
        <div className="section-title"> GASTRONOMIA </div>
        <Swiper {...sliderSettings} className="swiper-container">
          <SlideNextButton />
          {places.map((place, index) => (
            <SwiperSlide key={index}>
              <Link to={place.link}>
                <div className="slide">
                  <img src={place.image} alt={place.name} />
                  <span >{place.name}</span>
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

export default Gastronomia;
