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
      <p>Este es el comprobante de tu solicitud:{orderid}</p>
      <h2 style={{marginTop:"30px"}}>Gracias por contactarte con nosotros</h2>
      <h4>Pronto nos pondremos en contacto contigo</h4>
    </div>
  )
}

export default OrderVerify