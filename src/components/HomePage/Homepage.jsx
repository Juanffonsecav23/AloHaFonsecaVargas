import QuienesSomos from "../QuienesSomos/QuienesSomos"
import ItemListContainer from "../ItemListContainer/itemListContainer"
import Reglas from "../RyR/Reglas"

function Homepage() {
  return (
      <div className='Body'>
        <img src='/imgRooms/casablancadenoceh.jpeg'/>
        <QuienesSomos/>
        <ItemListContainer/>
        <Reglas/>
      </div>
  )
}

export default Homepage