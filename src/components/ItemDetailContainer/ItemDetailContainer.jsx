/* AsyncMock - servicioMock / backend/nube/api */
import {  useEffect, useState } from "react";
import "./ItemDetail.css";
/* import ItemCount from "../ItemCount/ItemCount"; */

import {  useParams, } from "react-router-dom";
import Loader from "../Loader/Loader";
/* import { cartContext } from "../../context/cartContext";*/
import { getRoomData } from "../../services/Firebase";
import Carrousel from "../Carrousel/Carrousel";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
/* import ItemListContainerEspacios from "../Espacios/ItemListContainerEspacios";*/
//import Swal from "sweetalert2"
// import Flex from "../Flex/Flex"; 
// import { differenceInDays, parseISO } from "date-fns"; 


function ItemDetailContainer() {
  const [errors , setErrors] = useState(null)
  const [room, setRoom] = useState(null);
/*   const [selectedDateIn, setSelectedDateIn] = useState('');
  const [selectedDateOut, setSelectedDateOut] = useState('');
  const [numberOfDays , setNumerOfDays] = useState(0)
  const [countInCart, setCountInCart] = useState(0);
  const { addItem} = useContext(cartContext);
 */  
  //const navigate = useNavigate();

  /* const showAlert = () => {
    Swal.fire({
      title: 'Reserva agregada con exito',
      icon: 'success',
      iconColor: "orange",
      focusConfirm: true,
      confirmButtonText: 'Ir a la reserva',
      confirmButtonColor: "orange"
    }).then((result) => {
      // verificamos que el resultado sea de confirmación, si el usuario presiona el botón, entonces será true 
      if (result.isConfirmed) {
        // Si es true, entonces ejecutamos el navigate, indicando la ruta 
        navigate("/cart");
      }
    })
  } */
  
/*   const handleDateChangeIn = (event) => {
    const dateIn = event.target.value;
    setSelectedDateIn(dateIn);
    setNumerOfDays(differenceInDays(parseISO(selectedDateOut) , parseISO(dateIn)));
  };
  const handleDateChangeOut = (event) => {
    const dateOut = event.target.value;
    setSelectedDateOut(dateOut);
    setNumerOfDays(differenceInDays(parseISO(dateOut) , parseISO(selectedDateIn)));
  };

  function onAddToCart(countDays) {
    const newItem = {
      room, numberOfDays
    }
    addItem(newItem , countDays);
    setCountInCart(countDays);
    showAlert();
  } */

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
    <div>
      <div className="cardDetail">
        <div className="card-detail_img">
          <Carrousel >
          <img src={room.img}  style={{width:"580px" , height:"455px"}}  />
          <img src={room.img1} style={{width:"580px" , height:"455px"}}  />
          <img src={room.img2} style={{width:"580px" , height:"455px"}}  />
          <img src={room.img3} style={{width:"580px" , height:"455px"}}  />
          </Carrousel>
        </div>
        <div className="card-detail_detail">
          <h1 className="ItemDetailTitle">{room.title}</h1>
          <p className="description">{room.description}</p>
        {/*  <Flex>
          <label>Check In</label>
          <label>Check Out</label>
          </Flex>
          <Flex>
          <span><input type="date" className="InputCalendario" onChange={handleDateChangeIn} value={selectedDateIn}></input></span>
          <span><input type="date" className="InputCalendario" onChange={handleDateChangeOut} value={selectedDateOut}></input></span>
          </Flex> */}
          <h3>$ {(room.price)} Cop / Mes</h3>
        {/* {countInCart === 0 ? (
            <ItemCount onAddToCart={onAddToCart} stock={room.capacidad} />
            ) : (
              <Link to="/cart" style={{color:"orange"}}>Ir a las reservas</Link>
              )} */}
              <a href="https://api.whatsapp.com/send?phone=573212402566" target="_blank" rel="noreferrer"  className="WhatsappButton"><img src="/src/assets/iconos/whatsappVerde.svg" alt="" style={{width:"40px", marginRight:"5px"}}/>Reserva por Whatsapp</a>
        </div>
      </div>
{/*       <ItemListContainerEspacios/> */}
      <CheckOutForm/>
    </div>
  );
}else {
  return(<Loader/>)
}

}

export default ItemDetailContainer;