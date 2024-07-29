import React from "react";
import "./slim.css"; // Asegúrate de que la ruta sea correcta
import { Link } from "react-router-dom";


const Slim = () => {
    return (
        <div id="value" className="v-wrapper">
            <div className="v-containerslim">
            <button className="boton-flotante"><Link to="/desarrolloHumano"> atras</Link></button>

                <div className="slim">SERVICIO LEGAL INTEGRAL MUNICIPAL</div>
                <div className="sub-slim">OBJETO</div>
                <div className="descr-slim">La Unidad del Servicio Legal Integral tiene como objeto las personas víctimas de
                    todo tipo de violencia que establece la Ley 348 violencia con el fin de garantizar a las
                    mujeres una vida digna y el ejerció pleno de sus derechos para vivir bien.</div>

                <div className="sub-slim">OBJETIVO</div>
                <div className="descr-slim">Brindar Servicio permanente y gratuito, para la protección y defensa psicológico,
                    social y legal de las mujeres en situación de violencia, promover la difusión, defensa
                    ejercicio de los derechos de las mujeres con la participación activa de las y los
                    ciudadanos. Desarrollo acciones de prevención en violencia de género en coordinación
                    con institución públicas, privadas y organizaciones sociales.</div>

                <div className="sub-slim">MISIÓN</div>
                <div className="descr-slim">Ser la institución que promueva una cultura de protección, defensa y respeto a los
                    derechos de las mujeres y la familia, comprometida con la erradicación con la
                    violencia intrafamiliar y doméstica, a través de la intervención profesional idónea, a
                    oportuno y efectivo que contribuya a la transformación a la de la sociedad desde un
                    perspectiva de Género.</div>

                <div className="sub-slim">VISIÓN</div>
                <div className="descr-slim">Un servicio que promueve la igualdad de oportunidades, con mujeres y hombres
                    conviviendo en una violencia y mentalmente saludable con mujeres empoderadas
                    de sus derechos protegidos por las leyes aportando activamente al desarrollo del
                    país.</div>

                <div className="sub-slim">PILARES FUNDAMENTALES SLIM</div>
                <div className="descr-slim">
                    <li>Difusión y promoción de la Ley 348.</li>
                    <li>Prevención de la violencia.</li>
                    <li>Atención de casos.</li>
                </div>

                <div className="sub-slim">RESPONSABILIDADES DEL SLIM</div>
                <div className="descr-slim">
                    <li>Prestar servicios de apoyo Psicológico, social y legal.</li>
                    <li>Brindar terapia especializada individual y grupal con enfoque de género.</li>
                    <li>Intervenir de manera inmediata ante la denuncia de un hecho de violación.</li>
                    <li>Brindar apoyo gratuito en las instancias que correspondan.</li>
                </div>

                <div className="sub-slim">FUNCIONES DEL SLIM</div>
                <div className="sub-slim">AREA LEGAL</div>
                <div className="descr-slim">Patrocinio en caso de Violencia física, psicológica, sexual, y económica, y otros delitos
                    establecidos en la ley 348 orientada e informa sobre procedimientos legales de
                    manera clara y sencilla, en todas las etapas de la denuncia. Elaboración de los
                    memoriales necesarios para el proceso para la atención de la persona que vive en
                    situación de violencia, acompañamiento y seguimiento a la mujer que vive en
                    situación de violencia, ante las instancias legales, hasta lograr la sentencia.
                    Acompañamiento e intervención en el Ministerio Público, Evitando retardación de
                    justicia. Realizando acciones de prevención a nivel estructura, individual y
                    comunitaria, realizar la valoración, individual y comunitario. Realizar la valoración
                    de niveles de riesgo y recomendar la aplicación de medidas de protección.</div>

                <div className="sub-slim">AREA PSICOLÓGICA</div>
                <div className="descr-slim">Contenciones en crisis a mujeres que viven en situación de violencia y acuden al
                    SLIM, valoración psicológica a mujeres que denuncia hechos de violencia.
                    Elaboración de informes Psicológicos para acompañar el proceso de denuncia ante
                    el Ministerio Publico orientación psicológica realizar la preparación y
                    acompañamiento a la víctima como un función estricta para la declaración a juicios.</div>

                <div className="sub-slim">AREA SOCIAL</div>
                <div className="descr-slim">Realizar el apoyo y orientación social, investigación social, entrevista social visitas
                    domiciliarias, para apoyar a la mujer que vive en situación de violencia y a sus hijos/as
                    y otros familiares que viven con ella. Elaboración de informes sociales.</div>

                <div className="sub-slim">REQUISITOS EXIGIBLES PARA LAS DISTINTAS TRAMITACIONES REALIZADAS EN LAS DISTINTAS SOLICITUDES</div>

                <div className="sub-slim">DENUNCIA POR VIOLENCIA FAMILIAR O DOMÉSTICA</div>
                <div className="descr-slim">
                    <li>1.- Copia de Cédula de Identidad de la Víctima.</li>
                    <li>2.- Copias de Factura de Luz del Domicilio Real.</li>
                    <li>3.- Croquis de Domicilio de demandante y demandado.</li>
                </div>

                <div className="sub-slim">REQUISITOS DE ASISTENCIA FAMILIAR Y HOMOLOGACIÓN DE ASISTENCIA FAMILIAR</div>
                <div className="descr-slim">
                    <li>1.- Copia de Cédula de Identidad de demandado y demandante.</li>
                    <li>2.- Certificados de Nacimientos de los hijos originales.</li>
                    <li>3.- Croquis de domicilio real del demandante y demandado más fotografías del frontis del domicilio de ambos.</li>
                    <li>4.- Factura de Luz, agua, otros servicios básicos.</li>
                    <li>5.- Certificados de Estudios de la Unidad Educativa.</li>
                    <li>6.- Apertura de Cuenta Bancaria a nombre delos beneficiarios.</li>
                    <li>7.- Documento original del Acuerdo transaccional de Asistencia Familiar.</li>
                </div>
            </div>
        </div>
    );
};

export default Slim;
