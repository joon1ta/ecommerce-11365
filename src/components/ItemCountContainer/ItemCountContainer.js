import React, { useState } from 'react'
import  ItemCount  from '../ItemCount/ItemCount';

export const CountContainer = ({ maxStock, minStock }) => {
   

    const [counter, setCounter] = useState(minStock)

const increase = () => {
    counter < maxStock && setCounter(counter + 1)
}
const decrease = () => {
    counter > minStock && setCounter(counter - 1)
}

    const onAdd = () => {

        counter <= maxStock ? alert(`Agregaste ${counter} al carrito`) : alert(`La cantidad ingresada es mayor a nuestro stock disponible`);
    };

    return (
        <ItemCount decrease={decrease} increase={increase} onAdd={onAdd} count={counter} />
    )
} 