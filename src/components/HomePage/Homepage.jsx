import QuienesSomos from "../QuienesSomos/QuienesSomos"
import ItemListContainer from "../ItemListContainer/itemListContainer"

function Homepage() {
  return (
      <div className='Body'>
        <img src='/imgRooms/casablancadenoceh.jpeg'/>
        <QuienesSomos/>
        <ItemListContainer/>
      </div>
  )
}

export default Homepage