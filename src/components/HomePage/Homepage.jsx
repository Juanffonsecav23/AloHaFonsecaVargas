import QuienesSomos from "../QuienesSomos/QuienesSomos"
import ItemListContainer from "../ItemListContainer/itemListContainer"
import CheckOutForm from "../CheckOutForm/CheckOutForm"

function Homepage() {
  return (
      <div className='Body'>
        <img src='/imgRooms/casablancadenoceh.jpeg'/>
        <QuienesSomos/>
        <ItemListContainer/>
        <CheckOutForm/>
      </div>
  )
}

export default Homepage