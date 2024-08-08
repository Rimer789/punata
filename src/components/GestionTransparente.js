import React from "react";
import "./estilos/Informacion.css";
import "./estilos/Gestion.css";
import escudo from "../imagenes/alcaldia/escudopunata.jpg";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import mediumImage from "./escudopunata.jpg";
import pdf1 from "./gestiontransparente/RPCPOA20221ERSEMESTRE.pdf";
import pdf2 from "./gestiontransparente/RPCPOAGESTION2022EINFORMEINICIALPOA2023.pdf";
import pdf3 from "./gestiontransparente/RPCPOA20231ERSEMESTRE.pdf";
import pdf4 from "./gestiontransparente/RPCPOAGESTION2023EINFORMEINICIALPOA2024.pdf";
import pdf5 from "./gestiontransparente/INFORMEDERPC1SEMESTRE2024.pdf";




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
                                <div className="pdf-item ">
                                    <a href={pdf1} target="_blank" rel="noopener noreferrer">
                                        <div className="pdf-thumbnailg pdf-thumbnailg-1">PDF</div>
                                        <div className="pdf-name">RPC POA 2022 1ER SEMESTRE</div>
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="pdf-item ">
                                    <a href={pdf2} target="_blank" rel="noopener noreferrer">
                                        <div className="pdf-thumbnailg pdf-thumbnailg-2">PDF</div>
                                        <div className="pdf-name">RPC POA GESTION 2022 E INFORME INICIAL POA 2023</div>
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="pdf-item ">
                                    <a href={pdf3} target="_blank" rel="noopener noreferrer">
                                        <div className="pdf-thumbnailg pdf-thumbnailg-3">PDF</div>
                                        <div className="pdf-name">RPC POA 2023 1ER SEMESTRE</div>
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="pdf-item ">
                                    <a href={pdf4} target="_blank" rel="noopener noreferrer">
                                        <div className="pdf-thumbnailg pdf-thumbnailg-4">PDF</div>
                                        <div className="pdf-name">RPC POA GESTION 2023 E INFORME INICIAL POA 2024</div>
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="pdf-item ">
                                    <a href={pdf5} target="_blank" rel="noopener noreferrer">
                                        <div className="pdf-thumbnailg pdf-thumbnailg-5">PDF</div>
                                        <div className="pdf-name">INFORME DE RCP 1ER SEMESTRE 2024</div>
                                    </a>
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
