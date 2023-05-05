import './navbar.css';
import DropdownAH from '../dropdown/DropdownAH';
import CarWidget from '../carWidget/CarWidget';
import ItemListContainer from '../itemListContainer/ItemListContainer';
export default function Navbar () {

    return (
        <div>
            <nav className="header">
                <ul className="navbarFV">
                    <li>
                        <a href=""><img src="src/imagenes/alojamiento.png" alt="" className='logo'/></a>
                    </li>
                    <DropdownAH/>
                    <li>
                        <a href="">Espacios</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                    <li>
                        <a href="">Reglas</a>
                    </li>
                    <CarWidget/>
                </ul>
            </nav>
            <ItemListContainer greeting="Bienvenid@ a AloHa - Alojamiento Habitacional"/>
        </div>
    )
}