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
                    {/* <div className="dropdown ">
                        <button  className="dropdownColor" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <NavLink to="/habitaciones">Habitaciones ▼</NavLink>
                        </button>
                        <ul className="dropdown-menu">
                          <li><NavLink className="dropdown-item" to="/category/Baño Privado">Baño Privado</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/category/Baño Compartido">Baño Compartido</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/category/Aparta Estudio">Aparta Estudios</NavLink></li>
                        </ul>
                    </div> */}
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
                        <NavLink to="/ReglasyRecomendaciones">Reglas/Recomendaciones</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contacto">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}