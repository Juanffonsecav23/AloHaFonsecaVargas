
import Carrousel from './components/Carrousel/Carrousel';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import Navbar from './components/navbar/Navbar';



function App() {

  return (
    <div>
      <div className='header'>
        <Navbar/>
      </div>
      <div className='Body'>
        <Carrousel>  
        <img src='src/assets/imagenesCuartos/AloHa/promociones/1.jpg'/>
        <img src='src/assets/imagenesCuartos/AloHa/promociones/2.jpg'/>
        <img src='src/assets/imagenesCuartos/AloHa/promociones/3.jpg'/>
        <img src='src/assets/imagenesCuartos/AloHa/promociones/4.jpg'/>
        </Carrousel>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </div>
    </div>
  )
}

export default App
