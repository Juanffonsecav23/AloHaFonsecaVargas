import QuienesSomos from "../QuienesSomos/QuienesSomos"
import ItemListContainer from "../ItemListContainer/itemListContainer"
import CheckOutForm from "../CheckOutForm/CheckOutForm"
import ItemListContainerEspacios from "../Espacios/ItemListContainerEspacios"
import { BotonosRedes } from "../Contacto/Contacto"

function Homepage() {
  return (
      <div className='Body'>
        <img src='/imgRooms/casaBlanca.jpeg' style={{width:"100%", height:"800px"}}/>
        <QuienesSomos/>
        <ItemListContainer/>
        <div className="fondoEspacios">
          <ItemListContainerEspacios/>
        </div>
        <BotonosRedes/>
        <div className="contacSection">
          <CheckOutForm/>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15904.82915919686!2d-74.0427604!3d4.7340203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e54073e5ae47ebb%3A0x6860988c008d3b3!2sCasa%20AloHa%20152%20Alojamiento%20Habitacional!5e0!3m2!1sen!2sco!4v1698453773716!5m2!1sen!2sco"   className="mapaHP"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
  )
}

export default Homepage