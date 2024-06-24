import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import mediumImage from "./escudopunata.jpg"; 
import "./estilos/Noticias.css";

const Noticias = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const jsonData = require("../listas/noticias.json");
    setNews(jsonData);
  }, []);

  return (
    <div className="page-background">
      {news.map((item, index) => (
        <div key={index} className="news-container">
          <NewsItem news={item} />
        </div>
      ))}
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

const NewsItem = ({ news }) => {
  return (
    <div className="container">
      <div className="news-item">
        <h2>{news.title}</h2>
        <p>{renderDescription(news.description)}</p>
        <p>{news.date}</p>
        <ImageSlider imagePaths={news.imagePaths} altText={news.title} />
      </div>
    </div>
  );
};

const renderDescription = (description) => {
  return description.split("||").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const ImageSlider = ({ imagePaths, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagePaths.length]);

  return (
    <div className="image-slider">
      {imagePaths.map((imagePath, index) => (
        <img
          key={index}
          src={imagePath}
          alt={`${altText} ${index}`}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default Noticias;

