import Carrousel from "../Carrousel/Carrousel"
import QuienesSomos from "../QuienesSomos/QuienesSomos"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

function Homepage() {
  return (
      <div className='Body'>
        <Carrousel>  
        <img src='/imgRooms/casablancadenoceh.jpeg'/>
        <img src='/promociones/2.jpg'/>
        <img src='/imgRooms/casablancadenoceh.jpeg'/>
        <img src='/promociones/4.jpg'/>
        </Carrousel>
        <QuienesSomos/>
        <ItemListContainer/>
      </div>
  )
}

export default Homepage