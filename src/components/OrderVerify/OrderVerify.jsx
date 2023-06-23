import { useParams } from "react-router-dom"
import "../../services/Firebase"

function OrderVerify() {
    const {orderid} = useParams() 
    return (
    <div>
      <h2>Gracias por tu reserva</h2>
      <small>Este es tu comprobante de compra: {orderid}</small>
    </div>
    /* con getDoc o get Docs se pueden traer los datos de la rserva para mostrarlos al cliente */
  )
}

export default OrderVerify