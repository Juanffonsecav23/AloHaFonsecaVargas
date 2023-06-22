import { useParams } from "react-router-dom"

function OrderVerify() {
    const {orderid} = useParams() 
    return (
    <h2>
        Gracias por tu compra
        <small>Este es tu comprobante de compra: {orderid}</small>
    </h2>
    /* con getDoc o get Docs se pueden traer los datos de la rserva para mostrarlos al cliente */
  )
}

export default OrderVerify