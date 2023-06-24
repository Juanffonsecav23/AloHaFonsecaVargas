import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/Firebase";
import { useNavigate } from "react-router-dom";
import "./CartView.css";
import Flex from "../Flex/Flex";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

function CartView() {
    const {cart , removeItem , clearCart , countTotalPrice } = useContext(cartContext)
    const navigateToRoomReservation = useNavigate() 
    async function handleConfirm(userData) {
        const order = {
            items: cart  ,
            buyer:userData ,
            date: new Date(),
            price: countTotalPrice()
        }
        const id =  await createOrder(order)
        clearCart();
        navigateToRoomReservation(`/order-confirmation/${id}`)
    }

    if (cart.length === 0) {
        return(<div>
            <h3>No hay ninguna reserva</h3>
            <Link to="/">Volver al inicio</Link>
        </div>)
    }
        return (
    <div>
    <h1 className="cartView-Title">Reservas</h1>
    {
        cart.map (room =>
            <>
                <ul key={room.id} className="cartView-Organization" >
                    <li><img src={room.room.img} alt="" /></li>
                    <ul className="cartView-Description">
                        <li><h2 style={{color:"orange"}}>{room.room.title}</h2>
                        </li>
                        <li>Numero de Personas : {room.count} </li>
                        <li>Numero de Noches: {room.numberOfDays} </li>
                        <li><h3>Total : $ {""} {(room.numberOfDays*room.room.price).toFixed(3)} Cop / Nigth</h3></li>
                        <li><button  style={{backgroundColor:"red"}} onClick={()=> removeItem(room.id)}>Eliminar Habitacion</button></li>
                    </ul>
                
                </ul>
                <CheckOutForm onHandleConfrim={handleConfirm} />
                <Flex>
                <button onClick={clearCart} style={{backgroundColor:"red"}} >Vaciar carrito</button>
                </Flex>
            </>
)
    }
    </div>)
    }
export default CartView