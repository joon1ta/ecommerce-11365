import React, { useState } from 'react';
import useCartContext from '../Context/cartContext'
import "../Cart/cart.css"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import firebase from 'firebase/app'
import '@firebase/firestore'
import { getFirestore } from '../../firebase'
import Formulario from '../Formulario/Formulario'


const Cart = () => {

const {productos, borrarItem, priceTotal, limpiarListCart} = useCartContext()
const [mostrarForm, setMostrarForm] = useState(false)
const [orderId, setOrderId] = useState("")
const [confirmation, setConfirmation] = useState(false)

const handleBorrar = (i) => {
    borrarItem(i.id)
}

const handleFinalize = () => {
    setMostrarForm(true)
}


const crearOrder = (comprador) => {
    const db = getFirestore()
    const orders = db.collection('order');

    const newOrder = {
        comprador: comprador,
        productos: productos,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: priceTotal(),
    }
   console.log("entre al order")
    orders.add(newOrder).then(({id}) => {
       
        setOrderId(id)
        
        setConfirmation(true)
     
    }).catch((e) => {console.log(e)});



       
  const Itemscollection = db.collection('items')
  const batch = getFirestore().batch()

  productos.forEach( p => {
      batch.update(Itemscollection.doc(p.id), {stock:p.stock - p.quantity})
  })
  batch.commit()
        .then(() => {
            console.log("Finalizado")
            limpiarListCart()
        }).catch(err=>console.log(err))
}




if(productos.length === 0 && orderId === "") {
   
    return (
        <div className="cart">
            <div className="heading cf">
                <h3>...No hay productos agregados al Carrito...</h3>
                <Link to="/" exact>
                    <button >Continuar Comprando</button>
                </Link>
            </div>
            
        </div>
    )
} else if (orderId && confirmation) {
    return(
        <div className="cart">
            <div className="heading cf">
                <h3>Su Orden No. <span className="validation">{orderId}</span> ha sido confirmada</h3>
                <Link to="/" exact>
                    <button >Continuar Comprando</button>
                </Link>
            </div>
        </div>
    )
}
    

return(
        <section className="cart">
           <div className="heading cf">
               <h2>Carrito de compras</h2>
               <Link to="/" exact>
                   <button >Seguir Comprando</button>
               </Link>
           </div>
           <div style={{display:"flex",justifyContent:"center"}}>
               {productos.map((item) => ( 
                 <div className="product">
                    <div>
                        <img style={{padding: 15,width: 300,height: 450}} src={item.pictureUrl} alt={item.id}/>
                    </div>
                    <div>
                    <h5 >{item.title}</h5>  
                    <p>Estilo: {item.description}</p>
                    </div>
                   
                   
                    <div className="product-quantity">
                    <label>Cantidad:</label>
                    <input style={{width:"7%",border:"none",marginLeft:"5px"}} readOnly type="text" placeholder={item.quantity}/>
                    </div>
                    
                    <div>
                        <button class="remove-product" onClick={()=>handleBorrar(item)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                    <div> <p>Precio unidad: ${item.price}</p></div>
                    <div className="total"> <p>Precio total: ${item.quantity*item.price}</p></div>
                    
                 </div>
                 
                 )
                 
               )}
           
           </div>
           <div >
                <div >
                    <label>Subtotal</label>
                    <div >{priceTotal()}</div>
                </div>
                    <div >
                        <label>Costo de envío</label>
                        <div >150</div>
                    </div>
                    <div >
                        <label>Total a Pagar</label>
                        <div >{priceTotal() + 150}</div>
                    </div>
                    <div>
                        <button  onClick={handleFinalize}>Proceder a la compra</button>
                    </div>
                   
            </div>

         
          
                
            {mostrarForm ? <Formulario crearOrder={crearOrder}/> : null}
        </section>
    
    )
}

export default Cart; 