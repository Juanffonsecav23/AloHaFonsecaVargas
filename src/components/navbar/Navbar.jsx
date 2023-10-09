import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar () {

    return (
        <div>
            <nav className="header">
                <ul className="navbarFV">
                    <li>
                        <NavLink to="/"><img src="/imgRooms/LogoAloHaEnBlanco.png" alt="Logo" className='logo'/></NavLink>
                    </li>
                    <li className="dropdown itemList tres">
                        <button className="dropbtn"><NavLink to="/habitaciones" className="itemListLink">Habitaciones ▼</NavLink></button>
                        <div className="dropdown-content">
                        <NavLink to="/category/Baño Privado" className="itemListLink tres itemList dropdownItems" >Baño Privado</NavLink>
                        <NavLink to="/category/Baño Compartido" className="itemListLink tres itemList dropdownItems" >Baño Compartido</NavLink>
                        <NavLink to="/category/Aparta Estudio" className="itemListLink tres itemList dropdownItems" >Aparta Estudios</NavLink>
                        </div>
                        </li>
                    <li>
                        <NavLink to="/Espacios">Espacios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ReglasyRecomendaciones">Reglas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contacto">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}