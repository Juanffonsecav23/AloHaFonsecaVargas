import { useParams } from "react-router-dom"
import "../../services/Firebase"
import "./OrderVerify.css"



function OrderVerify() {
    const {orderid} = useParams() 
    return (
    <div className="order-Verify-Box">
      <div className="success-checkmark">
      <div className="check-icon">
      <span className="icon-line line-tip"></span>
      <span className="icon-line line-long"></span>
      <div className="icon-circle"></div>
      <div className="icon-fix"></div>
      </div>
      </div>
      <h2>Gracias por tu reserva</h2>
      <small>Este es tu comprobante de compra: {orderid}</small>
    </div>
  )
}

export default OrderVerify