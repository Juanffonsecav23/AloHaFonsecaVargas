import './Navbar.css';
import CarWidget from '../CarWidget/CarWidget';
import { NavLink } from 'react-router-dom';

export default function Navbar () {

    return (
        <div>
            <nav className="header">
                <ul className="navbarFV">
                    <li>
                        <NavLink to="/"><img src="src/assets/imagenesCuartos/AloHa/LogoAloHaEnBlanco.png" alt="Logo" className='logo'/></NavLink>
                    </li>
                    <div className="dropdown ">
                        <button className="dropdownColor" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Habitaciones ▼
                        </button>
                        <ul className="dropdown-menu">
                          <li><NavLink className="dropdown-item" to="/category/Baño Privado">Baño Privado</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/category/Baño Compartido">Baño Compartido</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/category/Aparta Estudio">Aparta Estudios</NavLink></li>
                        </ul>
                    </div>
                    <li>
                        <NavLink to="/">Espacios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Reglas/Recomendaciones</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contacto</NavLink>
                    </li>
                    <CarWidget/>
                </ul>
            </nav>
        </div>
    )
}