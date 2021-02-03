import React from 'react';
import useCartContext from '../Context/cartContext'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Cart = () => {

const {productos, borrarItem} = useCartContext()

const handleBorrar = (i) => {
    borrarItem(i.id)
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
                    <div> <p>Precio: ${item.price}</p></div>
                 </div>
                 )
               )}

           </div>
        </section>

    )
}
export default Cart; 