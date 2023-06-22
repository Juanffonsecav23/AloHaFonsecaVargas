/* AsyncMock - servicioMock / backend/nube/api */
import { useContext, useEffect, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { cartContext } from "../../context/cartContext";
import { getRoomData } from "../../services/Firebase";
import Carrousel from "../Carrousel/Carrousel";

function ItemDetailContainer() {
  const [errors , setErrors] = useState(null)
  const [room, setRoom] = useState(null);
  const [countInCart, setCountInCart] = useState(0);
  const {cart , addItem , removeItem , countTotalPrice , clearCart} = useContext(cartContext);

  function onAddToCart(count) {
    addItem(room , count);
    setCountInCart(count);
    alert(`Agregaste ${count} - ${room.title} al carrito`);
  }

  const id = useParams().id;

  useEffect(() => {
    getRoomData(id).then((respuesta) => {
      setRoom(respuesta);
    })
    .catch(error => {
      setErrors(error.message)
    })
  }, [id]);

if (errors)
return (
  <div >
    <h1>Error</h1>
    <p>{errors}</p>
  </div>
);

if (room) {
  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <Carrousel>
        <img src={room.img} alt={room.title} />
        <img src={room.img1} alt={room.title} />
        <img src={room.img2} alt={room.title} />
        <img src={room.img3} alt={room.title} />
        </Carrousel>
      </div>
      <div className="card-detail_detail">
        <h1>{room.title}</h1>
        <h2 className="priceTag">$ {room.price} Cop / Mes</h2>
        <small>{room.category}</small>
        <small>{room.description}</small>

        {countInCart === 0 ? (
            <ItemCount onAddToCart={onAddToCart} stock={room.capacidad} />
          ) : (
            <Link to="/cart" style={{color:"orange"}}>Ir al carrito</Link> 
          )}
        {/* <ItemCount stock={room.capacidad} /> */}
      </div>
    </div>
  );
}else {
  return(<Loader/>)
}

}

export default ItemDetailContainer;