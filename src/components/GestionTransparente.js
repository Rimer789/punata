import React from "react";
import "./estilos/Informacion.css";
import "./estilos/Gestion.css";
import escudo from "../imagenes/alcaldia/escudopunata.jpg";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import mediumImage from "./escudopunata.jpg"; 


const GestionTransparente = () => {
    return (
        <div id="value" className="v-wrapper">
            <div className="v-container">
                <div className="text-container">
                    <div className="text-large">GESTION TRANSPARENTE</div>
                    <div className="text-small">Alcaldía de Punata</div>
                </div>
            </div>
            <div className="v-container2">
                <div className="alcalde-container">
                    <section id="news" className="news-section">
                        <h2>Rendicion de cuentas publica de las gestiones:</h2>
                        <div className="news-cards">
                            <div className="card">
                                <img src="ruta/de/la/imagen1.jpg" alt="" />
                                <div className="card-content">
                                    <h3>RENDICIÓN PÚBLICA DE CUENTAS INICIAL
                                        DEL GOBIERNO AUTÓNOMO MUNICIPAL DE PUNATA
                                        (GESTIÓN - 2021)</h3>
                                    <p>14 de junio de 2021</p>
                                    <button>Leer más</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="ruta/de/la/imagen2.jpg" alt="" />
                                <div className="card-content">
                                    <h3>RENDICIÓN PÚBLICA DE CUENTAS FINAL
                                        DEL GOBIERNO AUTÓNOMO MUNICIPAL DE PUNATA
                                        (GESTIÓN - 2021)</h3>
                                    <p>14 de junio de 2021</p>
                                    <button>Leer más</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="ruta/de/la/imagen3.jpg" alt="" />
                                <div className="card-content">
                                    <h3>RENDICIÓN PÚBLICA DE CUENTAS INICIAL
                                        DEL GOBIERNO AUTÓNOMO MUNICIPAL DE PUNATA
                                        (GESTIÓN - 2022)</h3>
                                    <p>13 de junio de 2022</p>
                                    <button>Leer más</button>
                                </div>
                            </div>
                            <div className="card">
                                <img src="ruta/de/la/imagen4.jpg" alt="" />
                                <div className="card-content">
                                    <h3>RENDICIÓN PÚBLICA DE CUENTAS FINAL
                                        DEL GOBIERNO AUTÓNOMO MUNICIPAL DE PUNATA
                                        (GESTIÓN - 2022)</h3>
                                    <p>23 de mayo de 2022</p>
                                    <button>Leer más</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
              
            </div>
            <div className="v-container3">
                
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

export default GestionTransparente;
