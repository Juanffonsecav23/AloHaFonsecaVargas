import { createContext, useState } from "react";

export const cartContext  = createContext ({cart : []})

export function CartContextProvider ({children}){

    const [cart, setCart] = useState([])

    function addItem(room , count) {
        const newCart = [...cart]; 
        if (isInCart(room.id)) {
            let newCart = cart.map(cartRoom => {
                if (cartRoom.id === room.id) {
                    return {...cartRoom , count: cartRoom.count + count}
                }
                else{
                    return{...cartRoom}
                }
            });
            setCart(newCart);
        }else{
            newCart.push({...room , count});
            setCart(newCart)
    }
    }

    function isInCart(id) {
        return cart.some((room) => room.id ===id)
    }

    function getItem(id) {
        const roomBuscado = cart.find((room) => room.id === id);
        return roomBuscado
    }


    function countItems() {
        let total = 0;
        cart.forEach((room) => {
            total += room.count
        });
        return total
    }/* funcion para la suma total de productos del carrito */

    const countTotalPrice = () => {
        let total = 0
        cart.forEach((e) => total += (e.count*e.price))
        return total        
    };/* funcion para totalizar el precio de los productos agragados */

    function clearCart(emptyCart) {
        setCart(cart.filter(cart => cart.value !== emptyCart))
    }/* funcion para limpiar todos los productos del carrito */

    function removeItem(idDelete) {
        setCart(cart.filter(room => room.id !== idDelete));
    }/* funcion para eliminar uno o varios items del carrito */

    return(
        <cartContext.Provider value={ { cart , setCart , addItem , countItems, countTotalPrice, removeItem, clearCart, getItem, isInCart } }>
            {children}
        </cartContext.Provider>
    )
}