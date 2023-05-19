import './Navbar.css';
import DropdownAH from '../Dropdown/DropdownAH';
import CarWidget from '../CarWidget/CarWidget';
export default function Navbar () {

    return (
        <div>
            <nav className="header">
                <ul className="navbarFV">
                    <li>
                        <a href=""><img src="src/assets/imagenesCuartos/AloHa/LogoAloHaEnBlanco.png" alt="" className='logo'/></a>
                    </li>
                    <DropdownAH/>
                    <li>
                        <a href="">Espacios</a>
                    </li>
                    <li>
                        <a href="">Reglas/Recomendaciones</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                    <CarWidget/>
                </ul>
            </nav>
        </div>
    )
}