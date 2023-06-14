import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import Button from "../Button/Button";

function CartView() {
    const {cart , removeItem , clearCart} = useContext(cartContext)

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
    </div>)
    }
export default CartView