import Carrousel from "../Carrousel/Carrousel"
import QuienesSomos from "../Quienes somos/QuienesSomos"
import ItemListContainer from "../itemListContainer/ItemListContainer"

function Homepage() {
  return (
      <div className='Body'>
        <Carrousel>  
        <img src='src/assets/imagenesCuartos/AloHa/casablancadenoceh.jpeg'/>
        <img src='src/assets/imagenesCuartos/AloHa/promociones/2.jpg'/>
        <img src='src/assets/imagenesCuartos/AloHa/promociones/3.jpg'/>
        <img src='src/assets/imagenesCuartos/AloHa/promociones/4.jpg'/>
        </Carrousel>
        <QuienesSomos/>
        <ItemListContainer/>
      </div>
  )
}

export default Homepage