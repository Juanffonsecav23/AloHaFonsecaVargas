import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Homepage from "./components/HomePage/Homepage"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"
import { CartContextProvider } from "./context/cartContext"
import CartView from "./components/CartView/CartView";
import OrderVerify from "./components/OrderVerify/OrderVerify"
import { exportData } from "./services/Firebase"



function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar/>
        {/* <button onClick={exportData}>Exportar Data</button> */}
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/room/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<CartView/>}/>
          <Route path="*" element={<h1>Error 404 : Page not found</h1>}/>
          <Route path="/order-confirmation/:orderid" 
          element={<OrderVerify/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
    
  )
}

export default App
