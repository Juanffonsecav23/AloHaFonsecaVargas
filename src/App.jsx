import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Homepage from "./components/HomePage/Homepage"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/itemListContainer"
import Footer from "./components/Footer/Footer"
import { CartContextProvider } from "./context/cartContext"
import OrderVerify from "./components/OrderVerify/OrderVerify"
import WhatsappButton from "./components/WhatsappButton/WhatsappButton"
import Espacios from "./components/Espacios/ItemListContainerEspacios"
import Reglas from "./components/RyR/Reglas"
import CheckOutForm from "./components/CheckOutForm/CheckOutForm"




function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/habitaciones" element={<ItemListContainer/>}/>
          <Route path="/room/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
{/*       <Route path="/cart" element={<CartView/>}/> */}          
          <Route path="/order-confirmation/:orderid" element={<OrderVerify/>}></Route>
          <Route path="/Espacios" element={<Espacios/>}/>
          <Route path="/ReglasyRecomendaciones" element={<Reglas/>}/>
          <Route path="/Contacto" element={<CheckOutForm/>}/>
          <Route path="*" element={<h1 style={{marginLeft:"30%"}}>Error 404 : Page not found</h1>}/>
        </Routes>
        <WhatsappButton/>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
    
  )
}

export default App
