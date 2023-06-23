import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer">
      <ul className="social-icon">
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.facebook.com/profile.php?id=100087745636618">
            <img style={{color:'white'}} src="/src/assets/iconos/facebook.svg" alt="" />
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://instagram.com/casaaloha152?igshid=MzRlODBiNWFlZA==">
            <img src="/src/assets/iconos/whatsapp.svg" alt="" />
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
            <img src="/src/assets/iconos/instagram.svg" alt="" />
          </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
            <img src="/src/assets/iconos/google.svg" alt="" />
          </a></li>
      </ul>
      <ul className="menu">
        <li className="menu__item"><Link className="menu__link" to="/">Inicio</Link></li>
        <li className="menu__item"><a className="menu__link" to="QuienesSomos">Quienes Somos</a></li>
        <li className="menu__item"><a className="menu__link" to="Habitaciones">Habitaciones</a></li>
        <li className="menu__item"><Link className="menu__link" to="/contacto">Contacto</Link></li>
      </ul>
      <p>&copy;2023 Juan Felipe Fonseca Vargas</p>
        </footer>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}

export default Footer