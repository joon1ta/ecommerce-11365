import { React } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cartWidget.css'
const CartWidget = () => {

    return (
        
        <FontAwesomeIcon className="Cart" size="lg" icon={faShoppingCart} />
       
    )
}


export default CartWidget;