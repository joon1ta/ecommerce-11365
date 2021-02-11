import React, { useState } from 'react';
import useCartContext from '../Context/cartContext'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from '../../firebase'
import Formulario from '../Formulario/Formulario'


const Cart = () => {

const {productos, borrarItem, priceTotal, isInCart, limpiarListCart} = useCartContext()
const [mostrarForm, setMostrarForm] = useState(false)
const [orderId, setOrderId] = useState('')
const [confirmation, setConfirmation] = useState('')

const handleBorrar = (i) => {
    borrarItem(i.id)
}

const handleFinalize = () => {
    setMostrarForm(true)
}


async function crearOrder(comprador) {
    const newOrder = {
        comprador,
        productos,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: priceTotal()
    }
    const db = getFirestore()
    const orders = db.collection('order')

    try {
        const doc = await orders.add(newOrder)
        setOrderId(doc.id)
        setConfirmation(true)
    } catch(err) {
        console.log('Error en la orden', err)
    }
}
if(confirmation) {
    alert('Su numero de Orden' + orderId + 'ha sido procesada con exito')
    limpiarListCart()
}

    return(
        <section>
           <div>
               <h2>Carrito de compras</h2>
               <Link to="/" exact>
                   <button className="btn btn-primary">Seguir Comprando</button>
               </Link>
           </div>
           <div style={{display:"flex",justifyContent:"center"}}>
               {productos.map((item) => ( 
                 <div>
                    <div>
                        <img style={{padding: 15,width: 300,height: 450}} src={item.pictureUrl} alt={item.id}/>
                    </div>
                    <h5 >{item.title}</h5>  
                   
                    <p>Estilo: {item.description}</p>
                    <label>Cantidad:</label>
                    <input style={{width:"7%",border:"none",marginLeft:"5px"}} readOnly type="text" placeholder={item.quantity}/>
                    <div>
                        <button className="btn btn-secondary" onClick={()=>handleBorrar(item)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                    <div> <p>Precio unidad: ${item.price}</p></div>
                    <div> <p>Precio total: ${item.quantity*item.price}</p></div>
                 </div>
                 )
               )}

           </div>

           {isInCart ?  
           <div>
                    <div>
                        <label>Subtotal</label>
                        <div>{priceTotal()}</div>
                    </div>
                    <div>
                        <label>Costo de envío</label>
                        <div>150</div>
                    </div>
                    <div>
                        <label>Total a Pagar</label>
                        <div>{priceTotal() + 150}</div>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={handleFinalize}>Proceder a la compra</button>
                    </div>
                    {mostrarForm ? <Formulario crearOrder={crearOrder}/> : null}
            </div>
                : "Aun no tiene productos agregados..."
            }
        </section>

    )
}
export default Cart; 