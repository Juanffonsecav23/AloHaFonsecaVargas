import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import Button from "../Button/Button";
import { createOrder } from "../../services/Firebase";
import { useNavigate } from "react-router-dom";

function CartView() {
    const {cart , removeItem , clearCart , countTotalPrice} = useContext(cartContext)
    const navigateToRoomReservation = useNavigate() 
    async function handleConfirm() {
        const order = {
            items: cart  ,
            buyer: {
                name: "Santiago",
                phone: 123123,
                email: "santigao@mail.com"
            },
            date: new Date(),
            price: countTotalPrice()
        }
        const id =  await createOrder(order)
        console.log("respuesta" , id);
        clearCart();
        navigateToRoomReservation(`/order-confirmation/${id}`)
        /* 
        1. alert: sweetaler
        2. react router 
        3. rendering condicionado 
        */
    }

    if (cart.length === 0) {
        return(<div>
            <h3>El carrito esta vacio </h3>
            <Link to="/">Volver al inicio</Link>
        </div>)
    }
        return (
    <div>
    <h2>Carrito de compras</h2>
    {
        cart.map (room =>
            <ul key={room.id}>
                
                <li>
                Producto : {room.title}
                <br/>
                Cantidad :{room.count} 
                <br/>
                Precio : $ {""} {room.count * room.price} / Mes
                <br/>
                <button onClick={()=>removeItem(room.id)}>Eliminar Habitacion</button>
                </li>
                
            </ul>)
    }
    <Button onClick={clearCart}>Vaciar carrito</Button>
    <button onClick={handleConfirm}>Crear orden</button>

    </div>)
    }
export default CartView