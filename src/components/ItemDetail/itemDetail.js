import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import useCartContext from '../Context/cartContext'
import {Link} from 'react-router-dom'

const ItemDetail = ({item}) => {
const minStock = 0
const maxStock = item.stock

const [add, setAdd] = useState(false)

const [quantity, setQuantity] = useState(0)
const { agregarItem } = useCartContext()

const cantidadItem = (counter) => {
  setQuantity(counter)
}


const agregarAlCarrito = () => {
  agregarItem(item, quantity)
  setAdd(true)
}   



 
    return (
        <div style={{marginBottom: 35,display: 'inline-block' }} >
       
        <img style={{padding: 15,width: 300,height: 450}} src={item.pictureUrl} alt={item.id}/>
       
        <h5 >{item.title}</h5>
        <p>Precio: ${item.price}</p>
        <p>Disponibles: {maxStock}</p>
        <p>Estilo: {item.description}</p>
        <ItemCount  maxStock={maxStock}
                   
                    minStock={minStock}
                    onAdd={cantidadItem}
        />
       <button className="btn btn-primary" onClick={agregarAlCarrito}>Agregar al carrito</button>
        { add ? <Link to={'/carrito'}><button className="btn btn-primary" onClick={agregarAlCarrito}>Finalizar Compra</button></Link> 
        : null
       }
     
      </div>
    )
}
export default ItemDetail 
