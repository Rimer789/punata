import React from "react";
import "./estilos/Informacion.css";
import "./estilos/Gestion.css";
import escudo from "../imagenes/alcaldia/escudopunata.jpg";


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
        </div>
    );
};

export default GestionTransparente;
