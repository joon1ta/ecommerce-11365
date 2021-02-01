import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'

import {Link} from 'react-router-dom'

const ItemDetail = ({item}) => {
const minStock = 0
const maxStock = 10
const [counter, setCounter] = useState(minStock)
const [add, setAdd] = useState(false)

const increase = () => {
    counter < maxStock && setCounter(counter + 1)
}
const decrease = () => {
    counter > minStock && setCounter(counter - 1)
}

const onAdd = () => {

        counter <= maxStock ? alert(`Agregaste ${counter} al carrito`) : alert(`La cantidad ingresada es mayor a nuestro stock disponible`);
        if (counter > 0)
        {setAdd(true)}
    };



  console.log(item)
    return (
        <div style={{marginBottom: 35,display: 'inline-block' }} >
       
        <img style={{padding: 15,width: 300,height: 450}} src={item.pictureUrl} alt={item.id}/>
       
        <h5 >{item.title}</h5>
        <p>Precio: ${item.price}</p>
        <p>Disponibles: {maxStock}</p>
        <p>Estilo: {item.description}</p>

        { add ?
        <Link to="/carrito">
           <button className="btn btn-primary">Finalizar Compra</button>
        </Link> : <ItemCount decrease={decrease} increase={increase} onAdd={onAdd} count={counter} minStock={minStock} maxStock={maxStock} /> 
        }
     
      </div>
    )
}
export default ItemDetail 
