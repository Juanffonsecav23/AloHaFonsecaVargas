import Flex from "../Flex/Flex"
import "./Espacios.css"

function Espacios() {
  return (
    <Flex>
        <div className="EspaciosBox">
            <div>
                <img src="https://placehold.co/400x200" alt="" className="imgEspacios" />
            </div>
            <div>
                <h4>Espacio #1</h4>
            </div>
        </div>
    </Flex>
  )
}

export default Espacios