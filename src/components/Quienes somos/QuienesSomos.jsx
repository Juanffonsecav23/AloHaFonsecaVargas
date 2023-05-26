import Flex from "../Flex/Flex";
import './QuienesSomos.css';

function QuienesSomos() {
  return (
    <div className="boxQS">
        <h1 className="tituloQS">Quienes Somos</h1>
        <div className="flexQS">
            <p className="textoQS">En el Alojamiento Habitacional AloHa nos encargamos de brindarte una experencia gratificante y comoda para tu hospedaje con unas histalaciones premium a un costo economico con todos los servicios incluidos.<br/><br/>
            Somos un negocio familiar el cual empezamos a finales del año 2022 con mucho amor y dedicación y hasta el dia de hoy lo seguimos manejando de esa manera para atender a nuestros huespedes de la mejor forma posible.</p>
            <img src="src/assets/imagenesCuartos/AloHa/alojamiento.png" alt="Logo" className="logoQS" />
                </div>
        </div>
  )
}

export default QuienesSomos