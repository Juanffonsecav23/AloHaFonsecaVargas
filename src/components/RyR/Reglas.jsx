import "./Reglas.css";
import { Icon } from '@iconify/react';

function Reglas() {
  return (
    <div>
      <h1 className="sectionTitle">Reglas</h1>
      <p style={{margin:"0 20px 20px 20px"}}>En Aloha 152, nuestro objetivo es proporcionar una experiencia agradable para todos nuestros huéspedes. Para ayudar a mantener un ambiente armonioso en nuestras instalaciones, por favor siga estas normas:</p>
      <div className="boxReglas">
        <div className="itemReglas">
        <img src="/src/assets/iconos/silence.svg" className="icon"/>
          <p>Los horarios de silencio se aplican desde las 9:00 PM hasta las 7:00 AM para asegurar un entorno tranquilo para todos los huéspedes.</p>
        </div>
        <div className="itemReglas">
        <Icon icon="material-symbols:smoke-free" className="icon" />
          <p>Está estrictamente prohibido fumar en todas las áreas interiores. Hay áreas designadas para fumar al aire libre en las habitaciones con terraza privada.</p>
        </div>
        <div className="itemReglas">
          <Icon icon="icon-park-outline:exclusive-gateway" className="icon"/>
          <p>Los baños en el primer piso están exclusivamente reservados para las habitaciones 1, 2 y 3.</p>
        </div>
        <div className="itemReglas">
          <Icon icon="mdi:love" className="icon" />
          <p>Respeto por los demás: Por favor, sea considerado con los demás huéspedes y nuestro personal. No se tolerará ningún comportamiento disruptivo o inapropiado.</p>
        </div>
        <div className="itemReglas">
          <Icon icon="game-icons:silence" className="icon"/>
          <p>No se permiten eventos ni fiestas.</p>
        </div>
        <div className="itemReglas">
          <Icon icon="game-icons:house-keys" className="icon" />
          <p>Guarde sus llaves de habitación de forma segura. Reporte inmediatamente las llaves perdidas o robadas.</p>
        </div>
        <div className="itemReglas">
          <Icon icon="la:house-damage" className="icon"/>
          <p>Los huéspedes son responsables financieramente de cualquier daño a la habitación o de objetos perdidos durante su estadía. Por favor, informe cualquier daño de inmediato.</p>
        </div>
        <div className="itemReglas">
          <Icon icon="solar:lightbulb-linear" className="icon"/>
          <p>Por favor, recuerda apagar las luces cuando no las estés utilizando para ahorrar energía. Tu colaboración en este sentido es muy apreciada y contribuye a un entorno más sostenible y respetuoso con el medio ambiente para todos.</p>
        </div>
        <div className="itemReglas">
          <Icon icon="mdi:door-closed-lock" className="icon" />
          <p>Para garantizar la seguridad de todos, te pedimos que siempre cierres la puerta con ambas cerraduras al entrar o salir. Utiliza la cerradura de arriba con llave y la cerradura digital de abajo.</p>
        </div>
      </div>
    </div>
  )
}

export default Reglas