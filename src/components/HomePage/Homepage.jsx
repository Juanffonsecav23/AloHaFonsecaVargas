import QuienesSomos from "../QuienesSomos/QuienesSomos"
import ItemListContainer from "../ItemListContainer/itemListContainer"
import CheckOutForm from "../CheckOutForm/CheckOutForm"

function Homepage() {
  return (
      <div className='Body'>
        <img src='/imgRooms/casaBlanca.jpeg' style={{width:"100%", height:"800px"}}/>
        <QuienesSomos/>
        <ItemListContainer/>
        <CheckOutForm/>
      </div>
  )
}

export default Homepage