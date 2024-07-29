import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Inicio from '../components/Inicio';
import Informacion from '../components/Informacion';
import Direcciones from '../components/Direcciones';
import CulTuris from '../components/CulTuris';
import Gastronomia from '../components/Gastronomia';
import Noticias from '../components/Noticias';
import DesarrolloHumano from '../components/Direcciones/DesarrolloHumano/Humano';
import IngresoMunicipal from '../components/Direcciones/IngresosMunicipales/IngresosMunicipales';
import Economia from '../components/Direcciones/EconomiaFinanzas/Economia';
import ObrasPublicas from '../components/Direcciones/ObrasPublicas/ObrasPublicas';
import Planificacion from '../components/Direcciones/Planificacion/Planificacion';
import MedioAmbiente from '../components/Direcciones/ProductivoMedioAmbiente/ProductivoMedioAmbiente';
import UrbanismoCatastro from '../components/Direcciones/UrbanismoCatastro/UrbanismoCatastro';
import Cementerio from '../components/Turismo/Cementerio/Cementerio';
import Era from '../components/Turismo/Laera/Era';
import Sivingani from '../components/Turismo/Sivingani/Sivingani';
import Villa from '../components/Turismo/Villa/Villa';
import Cantaritos from '../components/Restaurantes/Cantaritos/Cantaritos';
import Kjaras from '../components/Restaurantes/Kjaras/Kjaras';
import Archis from '../components/Restaurantes/Archis/Archis';
import LLajta from '../components/Restaurantes/LLajta/LLajta';
import Poblado from '../components/Restaurantes/Poblado/Poblado';
import Aurora from '../components/Restaurantes/Aurora/Aurora';
import Jotita from '../components/Restaurantes/Jotita/Jotita';
import Hermanos from '../components/Restaurantes/Hermanos/Hermanos';
import Huasi from '../components/Restaurantes/Huasi/Huasi';
import Rosquete from '../components/culturas/Rosquete/Rosquete';
import Chicha from '../components/culturas/Chicha/Chicha';
import Cusqueno from '../components/culturas/Cusqueno/Cusqueno';
import GestionTransparente from '../components/GestionTransparente';
import Servicios from '../components/ServiciosSociales';
import './menu.css';
import ScrollTop from './ScrollTop';
import Slim from '../components/Direcciones/DesarrolloHumano/Slim';
import Coslam from '../components/Direcciones/DesarrolloHumano/Coslam';

const Menu = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [isNavFixed, setIsNavFixed] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);
    const [dropdownDireccionesActive, setDropdownDireccionesActive] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    };

    const toggleDropdownDirecciones = () => {
        setDropdownDireccionesActive(!dropdownDireccionesActive);
    };

    const handleLinkClick = (path) => {
        setMenuActive(false);
        navigate(path);
    };

    const handleAnchorClick = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const nav = document.querySelector('.navbar');

            if (scrollPosition > prevScrollPos) {
                // Oculta el menú al hacer scroll hacia abajo
                nav.classList.add('hidden');
            } else {
                // Muestra el menú al hacer scroll hacia arriba
                nav.classList.remove('hidden');
            }

            prevScrollPos = scrollPosition;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <div style={{ marginBottom: isNavFixed ? '60px' : '0' }}></div>
            <nav className={`navbar ${menuActive || isNavFixed ? 'active' : ''}`}>
                <div className="navbar__hamburger" onClick={toggleMenu}>
                    &#9776;
                </div>
                <h3>G.A.M.P.</h3>
                <ul className="navbar__menu">
                    <li className={`navbar__item ${location.pathname === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')}>
                        <Link to="/" className="navbar__link">INICIO</Link>
                    </li>
                    <li className={`navbar__item ${location.pathname.startsWith('/informacion') ? 'active' : ''}`} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <Link to="/informacion" className="navbar__link">GOBIERNO MUNICIPAL</Link>
                        <ul className={`navbar__dropdown ${dropdownActive ? 'active' : ''}`}>
                            <li className="navbar__dropdown-item">
                                <Link to="/informacion" className="navbar__dropdown-link" onClick={(e) => handleAnchorClick(e, 'alcalde')}>Alcalde</Link>
                            </li>
                            <li className="navbar__dropdown-item">
                                <Link to="/informacion" className="navbar__dropdown-link" onClick={(e) => handleAnchorClick(e, 'concejo')}>Concejo</Link>
                            </li>
                            <li className="navbar__dropdown-item">
                                <Link to="/informacion" className="navbar__dropdown-link" onClick={(e) => handleAnchorClick(e, 'mision')}>Misión Vision</Link>
                            </li>
                            <li className="navbar__dropdown-item">
                                <Link to="/informacion" className="navbar__dropdown-link" onClick={(e) => handleAnchorClick(e, 'estrategia')}>Planificacion y estrategia</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`navbar__item ${location.pathname.startsWith('/direcciones') ? 'active' : ''}`} onMouseEnter={toggleDropdownDirecciones} onMouseLeave={toggleDropdownDirecciones}>
                        <Link to="/direcciones" className="navbar__link">DIRECCIONES</Link>
                        <ul className={`navbar__dropdown ${dropdownDireccionesActive ? 'active' : ''}`}>
                            <li className="navbar__dropdown-item">
                                <Link to="/desarrolloHumano" className="navbar__dropdown-link">Desarrollo Humano</Link>
                            </li>
                            <li className="navbar__dropdown-item">
                                <Link to="/ingresosMunicipales" className="navbar__dropdown-link">Ingresos Municipales</Link>
                            </li>
                            <li className="navbar__dropdown-item">
                                <Link to="/economiaFinanzas" className="navbar__dropdown-link">Economía y Finanzas</Link>
                            </li>
                            <li className="navbar__dropdown-item">
                                <Link to="/obrasPublicas" className="navbar__dropdown-link">Obras Públicas</Link>
                            </li>
                            <li className="navbar__dropdown-item">
                                <Link to="/planificacion" className="navbar__dropdown-link">Planificación</Link>
                            </li>
                            <li className="navbar__dropdown-item">
                                <Link to="/productividadMedioHambiente" className="navbar__dropdown-link">Productividad y Medio Ambiente</Link>
                            </li>
                            <li className="navbar__dropdown-item">
                                <Link to="/urbanismoCatastro" className="navbar__dropdown-link">Urbanismo y Catastro</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`navbar__item ${location.pathname === '/ServiciosSociales' ? 'active' : ''}`} onClick={() => handleLinkClick('/ServiciosSociales')}>
                        <Link to='/ServiciosSociales' className="navbar__link">SERVICIOS SOCIALES</Link>
                    </li>
                    <li className={`navbar__item ${location.pathname === '/gestionTransparente' ? 'active' : ''}`} onClick={() => handleLinkClick('/gestionTransparente')}>
                        <Link to='/gestionTransparente' className="navbar__link">GESTIÓN TRANSPARENTE</Link>
                    </li>
                    <li className={`navbar__item ${location.pathname === '/culturaturismo' ? 'active' : ''}`} onClick={() => handleLinkClick('/culturaturismo')}>
                        <Link to='/culturaturismo' className="navbar__link">CULTURA Y TURISMO</Link>
                    </li>
                    <li className={`navbar__item ${location.pathname === '/gastronomia' ? 'active' : ''}`} onClick={() => handleLinkClick('/gastronomia')}>
                        <Link to='/gastronomia' className="navbar__link">SERVICIO DE RESTAURANTES</Link>
                    </li>
                    <li className={`navbar__item ${location.pathname === '/noticias' ? 'active' : ''}`} onClick={() => handleLinkClick('/noticias')}>
                        <Link to='/noticias' className="navbar__link">NOTICIAS</Link>
                    </li>
                </ul>
            </nav>
            <ScrollTop />
            <div>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/informacion" element={<Informacion />} />
                    <Route path="/informacion/alcalde" element={<div>Alcalde</div>} />
                    <Route path="/informacion/concejo" element={<div>Concejo</div>} />
                    <Route path="/informacion/mision" element={<div>Misión</div>} />
                    <Route path="/informacion/vision" element={<div>Visión</div>} />
                    <Route path="/direcciones" element={<Direcciones />} />
                    <Route path='/culturaturismo' element={<CulTuris />} />
                    <Route path='/gastronomia' element={<Gastronomia />} />
                    <Route path='/noticias' element={<Noticias />} />
                    <Route path='/desarrolloHumano' element={<DesarrolloHumano />} />
                    <Route path='/economiaFinanzas' element={<Economia />} />
                    <Route path='/ingresosMunicipales' element={<IngresoMunicipal />} />
                    <Route path='/obrasPublicas' element={<ObrasPublicas />} />
                    <Route path='/planificacion' element={<Planificacion />} />
                    <Route path='/productividadMedioHambiente' element={<MedioAmbiente />} />
                    <Route path='/urbanismoCatastro' element={<UrbanismoCatastro />} />
                    <Route path='/cementerio' element={<Cementerio />} />
                    <Route path='/era' element={<Era />} />
                    <Route path='/sivingani' element={<Sivingani />} />
                    <Route path='/villa' element={<Villa />} />
                    <Route path='/cantaritos' element={<Cantaritos />} />
                    <Route path='/kjaras' element={<Kjaras />} />
                    <Route path='/archis' element={<Archis />} />
                    <Route path='/llajta' element={<LLajta />} />
                    <Route path='/poblado' element={<Poblado />} />
                    <Route path='/aurora' element={<Aurora />} />
                    <Route path='/pakayhuasi' element={<Huasi />} />
                    <Route path='/hermanos' element={<Hermanos />} />
                    <Route path='/jotita' element={<Jotita />} />
                    <Route path='/rosquete' element={<Rosquete />} />
                    <Route path='/chicha' element={<Chicha />} />
                    <Route path='/cusqueno' element={<Cusqueno />} />
                    <Route path='/gestionTransparente' element={<GestionTransparente />} />
                    <Route path='/ServiciosSociales' element={<Servicios/>} />
                    <Route path='/slim' element={<Slim/>} />
                    <Route path='/coslam' element={<Coslam/>} />


                </Routes>
            </div>
        </header>
    );
};

export default Menu;
