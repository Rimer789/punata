import React from "react";
import "./slim.css"; // Asegúrate de que la ruta sea correcta
import { Link } from "react-router-dom";
import orgadef from "./orgadef.jpg"
import horario from "./horario.jpg"


const Defensoria = () => {
    return (
        <div id="value" className="v-wrapper">
            <div className="v-containerslim">
                <button className="boton-flotante"><Link to="/desarrolloHumano"> atras</Link></button>
                <div className="sub-slim">PERSONAL PROFESIONAL DE LA DEFENSORIA DE LA NIÑEZ Y ADOLESCENCIA</div>
                <div className="escudo-container">
                    <img
                        src={orgadef}
                        alt="Escudo del municipio"
                        className="escudo-imgi"
                    />
                </div>
                <div className="escudo-container">
                    <img
                        src={horario}
                        alt="Escudo del municipio"
                        className="escudo-imgd"
                    />
                </div>
                <div className="slim">DEFENSORÍA DE LA NIÑEZ Y ADOLESCENCIA</div>
                <div className="sub-slim">OBJETIVO GENERAL</div>
                <div className="descr-slim">Establecer y regular el régimen de prevención, protección y atención
                    integral que el estado y la sociedad deben garantizar a todo niña, niño o
                    adolescente con el fin de asegurarles un desarrollo físico, mental, moral,
                    espiritual, emocional y social en condiciones de libertad, respeto,
                    dignidad, equidad y justicia brindando un servicio gratuito, socio-jurídico
                    y psicológico, dependiente del Gobierno Municipal.</div>

                <div className="sub-slim">OBJETIVO ESPECIFICO</div>
                <div className="descr-slim">
                    <li>Proteger y defender los derechos
                        de los Niños, Niñas y
                        Adolescentes y la familia con la
                        protección socio-jurídica y
                        psicológica, brindando un
                        servicio gratuito.</li>
                </div>
                <div className="sub-slim">MISIÓN</div>
                <div className="descr-slim">Generar una cultura de respeto de los derechos de los niños y los
                    adolescentes, su protección y su defensa a través de la asistencia legal,
                    psicológica y social que garantice el desarrollo integral de los niños, niñas
                    y adolescentes, como sujetos de derechos que garantice el ejercicio y
                    respeto pleno de sus derechos en la jurisdicción de Municipio de Punata.
                </div>

                <div className="sub-slim">VISIÓN</div>
                <div className="descr-slim">Asegurar que la voz de niños/as y
                    adolescentes sea escuchada y valorada
                    Combatir las diferentes formas de
                    violencia contra niños, niñas y
                    adolescentes dentro y fuera de la
                    familia, fortaleciendo vínculos
                    familiares y concientizando los
                    derechos, deberes de niños, niñas y
                    adolescentes, y la responsabilidad
                    paterna y materna, a través de las
                    diferentes actividades que promueven
                    el reconocimiento, respeto y restitución
                    de sus derechos.</div>

                <div className="sub-slim">SERVICIOS GRATUITOS EN;</div>
                <div className="descr-slim">
                    <li>ÁREA LEGAL</li>
                    <li>ÁREA SOCIAL</li>
                    <li>ÁREA PSICOLÓGICA</li>
                    <li> TERAPIAS A NIÑOS/AS Y ADOLESCENTES</li>
                    <li> TERAPIAS FAMILIARES</li>
                    <li> TALLERES A ORGANIZACIONES E INSTITUCIONES</li>
                </div>

                <div className="sub-slim">¿QUÉ ES LA DEFENSORÍA DE LA NIÑEZ Y
                    ADOLESCENCIA?</div>
                <div className="descr-slim">
                    Somos una institución pública, que brinda un servicio
                    municipal, gratuito, público y permanente, que, a
                    través del equipo interdisciplinario, promueve,
                    protege y defiende los derechos de los niños, niñas y
                    adolescentes del Municipio de Punata, es dependiente
                    del Gobierno Autónomo Municipal de Punata
                </div>

                
            </div>
        </div>
    );
};

export default Defensoria;
