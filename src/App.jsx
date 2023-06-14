import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Homepage from "./components/HomePage/Homepage"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"
import { CartContextProvider } from "./context/cartContext"
import CartView from "./components/CartView/CartView"

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/room/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<CartView/>}/>
          <Route path="*" element={<h1>Error 404 : Page not found</h1>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
    
  )
}

export default App
