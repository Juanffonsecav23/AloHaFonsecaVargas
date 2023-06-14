import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

export default function CarWidget (){

    const {countItems} = useContext(cartContext);

    if (countItems() === 0 ) {
        return(
            <Link to="/cart"> 
                <img src="src/components/carWidget/assets/Cart.svg"/>
            </Link>
        )
    }
    return(
        <div>
            <Link to="/cart">
            <img src="src/components/carWidget/assets/Cart.svg"/>
            <span>{countItems()}</span> 
            </Link>
        </div>
    )
}
