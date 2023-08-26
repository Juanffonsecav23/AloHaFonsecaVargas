import Flex from "../Flex/Flex"
import "./ItemEspacios.css"

function ItemEspacios({title , img, description}) {
  return (
    <Flex>
    <div className="EspaciosBox">
        <div>
            <img src={img} alt="" className="imgEspacios" />
        </div>
        <div className="bodyCardEspacios">
            <h4>{title}</h4>
            <small>{description}</small>
        </div>
    </div>
    </Flex>
  )
}

export default ItemEspacios