import { Link } from 'react-router-dom';
import './Footer.css';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <div>
      <footer className="footer">
      <img src="/imgRooms/LogoAloHaEnBlanco.svg" alt="" style={{width:"80px", height:"80px", marginLeft:"25px"}} />
      <ul className="socialIcon">
        <li className="socialIconItem"><a className="socialIconLink" href="https://www.facebook.com/profile.php?id=100087745636618">
          <Icon icon="ic:baseline-facebook" />
          </a></li>
        <li className="socialIconItem"><a className="socialIconLink" href="https://api.whatsapp.com/send?phone=573212402566">
          <Icon icon="ic:baseline-whatsapp" />
          </a></li>
        <li className="socialIconItem"><a className="socialIconLink" href="https://instagram.com/casaaloha152?igshid=MzRlODBiNWFlZA==">
          <Icon icon="mdi:instagram" />
          </a></li>
      </ul>
      <ul className="menu">
        <li className="menuItem"><Link className="menuLink" to="/">Inicio</Link></li>
        <li className="menuItem"><Link className="menuLink" to="/ReglasyRecomendaciones">Reglas</Link></li>
        <li className="menuItem"><Link className="menuLink" to="/habitaciones">Habitaciones</Link></li>
        <li className="menuItem"><Link className="menuLink" to="/contacto">Contacto</Link></li>
      </ul>
      <p>© 2023 Juan Felipe Fonseca Vargas</p>
        </footer>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}

export default Footer