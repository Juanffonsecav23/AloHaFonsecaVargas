/* AsyncMock - servicioMock / backend/nube/api */
import { useContext, useEffect, useState } from "react";
import "./ItemDetail.css";
/* import ItemCount from "../ItemCount/ItemCount"; */

import { Link, useParams, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
/* import { cartContext } from "../../context/cartContext";*/
import { getRoomData } from "../../services/Firebase";
import Carrousel from "../Carrousel/Carrousel";
import Swal from "sweetalert2"
/* import Flex from "../Flex/Flex"; */
/* import { differenceInDays, parseISO } from "date-fns"; */


function ItemDetailContainer() {
  const [errors , setErrors] = useState(null)
  const [room, setRoom] = useState(null);
/*   const [selectedDateIn, setSelectedDateIn] = useState('');
  const [selectedDateOut, setSelectedDateOut] = useState('');
  const [numberOfDays , setNumerOfDays] = useState(0)
  const [countInCart, setCountInCart] = useState(0);
  const { addItem} = useContext(cartContext);
 */  const navigate = useNavigate();

  const showAlert = () => {
    Swal.fire({
      title: 'Reserva agregada con exito',
      icon: 'success',
      iconColor: "orange",
      focusConfirm: true,
      confirmButtonText: 'Ir a la reserva',
      confirmButtonColor: "orange"
    }).then((result) => {
      /* verificamos que el resultado sea de confirmación, si el usuario presiona el botón, entonces será true */
      if (result.isConfirmed) {
        /* Si es true, entonces ejecutamos el navigate, indicando la ruta */
        navigate("/cart");
      }
    })
  }
  
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
    <div className="cardDetail">
      <div className="card-detail_img">
        <Carrousel>
        <img src={room.img} alt={room.title} />
        <img src={room.img1} alt={room.title}/>
        <img src={room.img2} alt={room.title}/>
        <img src={room.img3} alt={room.title} />
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
        <h3 style={{marginTop: "20px"}}>$ {(room.price).toFixed(3)} Cop / Noche</h3>
      {/* {countInCart === 0 ? (
          <ItemCount onAddToCart={onAddToCart} stock={room.capacidad} />
          ) : (
            <Link to="/cart" style={{color:"orange"}}>Ir a las reservas</Link> 
            )} */}
            <Link to="/cart" style={{color:"orange"}}>Ir a las reservas</Link> 
      </div>
    </div>
  );
}else {
  return(<Loader/>)
}

}

export default ItemDetailContainer;