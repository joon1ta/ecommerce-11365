import { React } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cartWidget.css'
import useCartContext from '../Context/cartContext'
import {Link} from 'react-router-dom'


const CartWidget = () => {
    const {cartWidgetContador, isInCart} = useCartContext()

    return (
        <>
       
        {isInCart ?
        <Link to= {'/carrito'} className="carrito-widget">
        <div className='carrito-icon'>
        <FontAwesomeIcon className="Cart" size="lg" icon={faShoppingCart} />
        <span className='items'>{cartWidgetContador()}</span>
        </div>
        </Link>
        : null
    }
        
        </>
       
       
    )
}


export default CartWidget;