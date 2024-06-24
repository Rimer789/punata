import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Inicio from '../components/Inicio';
import "../menu/menu.css";
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


const Menu = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [isNavFixed, setIsNavFixed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleLinkClick = (path) => {
        setMenuActive(false);
        navigate(path);
    };

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const nav = document.querySelector('.menu');

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
        <>
            <div style={{ marginBottom: isNavFixed ? '60px' : '0' }}>
            </div>
            <nav className={`menu ${menuActive || isNavFixed ? 'active' : ''}`}>
                <div className="hamburger-icon" onClick={toggleMenu}>
                    &#9776;
                </div>
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}>
                        <Link to="/">INICIO</Link>
                    </li>
                    <li className={location.pathname === '/informacion' ? 'active' : ''} onClick={() => handleLinkClick('/informacion')}>
                        <Link to="/informacion">GOBIERNO MUNICIPAL</Link>
                    </li>
                    <li className={location.pathname === '/direcciones' ? 'active' : ''} onClick={() => handleLinkClick('/direcciones')}>
                        <Link to="/direcciones">DIRECCIONES MUNICIPALES</Link>
                    </li>
                    <li className={location.pathname === '/gestionTransparente' ? 'active' : ''} onClick={() => handleLinkClick('/gestionTransparente')}>
                        <Link to='/gestionTransparente'>GESTION TRANSPARENTE</Link>
                    </li>
                    <li className={location.pathname === '/culturaturismo' ? 'active' : ''} onClick={() => handleLinkClick('/culturaturismo')}>
                        <Link to='/contactos'>CULTURA Y TURISMO</Link>
                    </li>
                    <li className={location.pathname === '/gastronomia' ? 'active' : ''} onClick={() => handleLinkClick('/gastronomia')}>
                        <Link to='/gastronomia'>SERVICIO DE RESTAURANTES</Link>
                    </li>
                    <li className={location.pathname === '/noticias' ? 'active' : ''} onClick={() => handleLinkClick('/noticas')}>
                        <Link to='/noticias'>NOTICIAS</Link>
                    </li>
                    

                </ul>
            </nav>
            <div>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/informacion" element={<Informacion/>}/>
                    <Route path="/direcciones" element={<Direcciones/>}/>
                    <Route path='/culturaturismo' element={<CulTuris/>}/>
                    <Route path='/gastronomia' element={<Gastronomia/>}/>
                    <Route path='/noticas' element={<Noticias/>}/>
                    <Route path='/desarrolloHumano' element={<DesarrolloHumano/>}/>
                    <Route path='/economiaFinanzas' element={<Economia/>}/>
                    <Route path='/ingresosMunicipales' element={<IngresoMunicipal/>}/>
                    <Route path='/obrasPublicas' element={<ObrasPublicas/>}/>
                    <Route path='/planificacion' element={<Planificacion/>}/>
                    <Route path='/productividadMedioHambiente' element={<MedioAmbiente/>}/>
                    <Route path='/urbanismoCatastro' element={<UrbanismoCatastro/>}/>
                    <Route path='/cementerio' element={<Cementerio/>}/>
                    <Route path='/era' element={<Era/>}/>
                    <Route path='/sivingani' element={<Sivingani/>}/>
                    <Route path='/villa' element={<Villa/>}/>
                    <Route path='/cantaritos' element={<Cantaritos/>}/>
                    <Route path='/kjaras' element={<Kjaras/>}/>
                    <Route path='/archis' element={<Archis/>}/>
                    <Route path='/llajta' element={<LLajta/>}/>
                    <Route path='/poblado' element={<Poblado/>}/>
                    <Route path='/aurora' element={<Aurora/>}/>
                    <Route path='/pakayhuasi' element={<Huasi/>}/>
                    <Route path='/hermanos' element={<Hermanos/>}/>
                    <Route path='/jotita' element={<Jotita/>}/>
                    <Route path='/rosquete' element={<Rosquete/>}/>
                    <Route path='/chicha' element={<Chicha/>}/>
                    <Route path='/cusqueno' element={<Cusqueno/>}/>
                    <Route path='/gestionTransparente' element={<GestionTransparente/>}/>
                </Routes>
                
            </div>
        </>
    );
};

export default Menu;
