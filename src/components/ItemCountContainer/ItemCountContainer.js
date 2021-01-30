import React, { useState } from 'react'
import  ItemCount  from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'


export const CountContainer = ({ maxStock, minStock }) => {
   

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

    return (
        <>
        

        { add ?
        <Link to="/cart">
           <button className="btn btn-primary">Finalizar Compra</button>
        </Link> : <ItemCount decrease={decrease} increase={increase} onAdd={onAdd} count={counter} /> }
        
        </>
    )

} 