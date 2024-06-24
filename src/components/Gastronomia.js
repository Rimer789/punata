import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "./estilos/Gastronomia.css";
import { sliderSettings } from "./common";

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
