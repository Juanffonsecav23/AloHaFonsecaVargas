import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import Button from "../Button/Button";
import { createOrder } from "../../services/Firebase";
import { useNavigate } from "react-router-dom";
import "./CartView.css";
import Flex from "../Flex/Flex";

function CartView() {
    const {cart , removeItem , clearCart , countTotalPrice } = useContext(cartContext)
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
    }

    if (cart.length === 0) {
        return(<div>
            <h3>No hay ninguna reserva</h3>
            <Link to="/">Volver al inicio</Link>
        </div>)
    }
        return (
    <div>
    <h1 className="cartViewTitle">Reservas</h1>
    {
        cart.map (room =>
            <>
                <ul key={room.id} className="cartViewOrganization" >
                    <li><img src={room.room.img} alt="" /></li>
                    <li>
                    {room.room.title}
                    </li>
                    <li>Personas : {room.count} </li>
                    <li>Cantidad de días:
                    {room.numberOfDays}
                    </li>
                    <li>Precio : $ {""} {countTotalPrice(room.room.numberOfDays)}M Cop / Mes</li>
                
                </ul>
                
            </>
)
    }
    <Flex>
    <Button onClick={()=>removeItem(room.id)}>Eliminar Habitacion</Button>
    <Button onClick={clearCart}>Vaciar carrito</Button>
    <Button onClick={handleConfirm}>Crear orden</Button>
    <Button onClick={countTotalPrice}>calcular Precio</Button>
    </Flex>
    </div>)
    }
export default CartView

