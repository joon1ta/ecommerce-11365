import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {Products} from '../../listProducts';
import ItemDetail from '../ItemDetail/itemDetail' ;







 const ItemDetailContainer = () => {

  
 

  const [items, setItems] = useState([])
  const{id} = useParams()
useEffect(() => {
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
    resolve(Products)
        }, 500)
    })
    
    promise.then((response) => {
       setItems(response[id-1])
       console.log(response)
    })
},[id])
      return (<><ItemDetail item={items} /></>)
    }
    
   
    export default ItemDetailContainer