/* AsyncMock - servicioMock / backend/nube/api */
import { useContext, useEffect, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { cartContext } from "../../context/cartContext";
import { getRoomData } from "../../services/Firebase";
import Carrousel from "../Carrousel/Carrousel";
import Swal from "sweetalert2"
import Flex from "../Flex/Flex";
import { differenceInDays, parseISO } from "date-fns";

function ItemDetailContainer() {
  const [errors , setErrors] = useState(null)
  const [room, setRoom] = useState(null);
  const [selectedDateIn, setSelectedDateIn] = useState('');
  const [selectedDateOut, setSelectedDateOut] = useState('');
  const [numberOfDays , setNumerOfDays] = useState(0)
  const [countInCart, setCountInCart] = useState(0);
  const {cart , addItem , removeItem , countTotalPrice , clearCart} = useContext(cartContext);
  
  const showAlert =()=>{
    Swal.fire({
      title: 'Reserva realizada con exito',
      icon: 'success',
      iconColor: "orange",
      focusConfirm: true,
      confirmButtonText:
        '<a href="/cart">Ir a la reserva</a> ',
      confirmButtonColor:"orange"
    })

  }
  
  const handleDateChangeIn = (event) => {
    const dateIn = event.target.value;
    setSelectedDateIn(dateIn);
  };
  const handleDateChangeOut = (event) => {
    const dateOut = event.target.value;
    setSelectedDateOut(dateOut);
  };
  function countDays() {
    setNumerOfDays(differenceInDays(parseISO(selectedDateOut) , parseISO(selectedDateIn)));
  }


  function onAddToCart(count) {
    addItem(room , count);
    setCountInCart(count);
    showAlert();
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
        <img src={room.img1} alt={room.title}/>
        <img src={room.img2} alt={room.title}/>
        <img src={room.img3} alt={room.title} />
        </Carrousel>
      </div>
      <div className="card-detail_detail">
        <h1>{room.title}</h1>
        <h2 className="priceTag">$ {room.price}M Cop / Mes</h2>
        
        <p className="description">{room.description}</p>
        <Flex>
        <label>Check In</label>
        <label>Check Out</label>
        </Flex>
        <Flex>
        <span><input type="date" className="InputCalendario" onChange={handleDateChangeIn} value={selectedDateIn}></input></span>
        <span><input type="date" className="InputCalendario" onChange={handleDateChangeOut} value={selectedDateOut}></input></span>
        </Flex>
        <button onClick={countDays}>calcular</button>
        <p>Numero de dias: {numberOfDays}</p>
        {countInCart === 0 ? (
            <ItemCount onAddToCart={onAddToCart} stock={room.capacidad} />
          ) : (
            <Link to="/cart" style={{color:"orange"}}>Ir a las reservas</Link> 
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