import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar () {

    return (
        <div style={{position:"fixed", width:"100%", zIndex:"10"}}>
            <nav className="header">
                <ul className="navbarFV">
                    <li>
                        <NavLink to="/"><img src="/imgRooms/LogoAloHaEnBlanco.svg" alt="Logo" className='logo' style={{width:"80px" , height:"80px"}}/></NavLink>
                    </li>
                    <li className="dropdown itemList tres">
                        <button className="dropbtn"><NavLink to="/habitaciones" className="itemListLink">Habitaciones ▼</NavLink></button>
                        <div className="dropdown-content">
                        <NavLink to="/category/Baño Privado" className="navbarItem" >Baño Privado</NavLink>
                        <NavLink to="/category/Baño Compartido" className="navbarItem" >Baño Compartido</NavLink>
                        <NavLink to="/category/Aparta Estudio" className="navbarItem" >Aparta Estudios</NavLink>
                        </div>
                        </li>
                    <li>
                        <NavLink to="/ReglasyRecomendaciones" className="navbarItem">Reglas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contacto" className="navbarItem">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}