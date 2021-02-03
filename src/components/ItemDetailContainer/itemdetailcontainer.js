import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {Products} from '../../listProducts';
import ItemDetail from '../ItemDetail/itemDetail' ;


const getItem = (id) => {
    return new Promise(result => setTimeout(() =>
    { result(Products.find(product =>
        product.id===parseInt(id)))
    }, 500))
}




 const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

  const{id} = useParams()


useEffect(() => {
  setLoading(true);
  getItem(id).then((product) => {
      setItems(product)
      setLoading(false)
  });
}, [id])
   
      return (
      <>
      {loading ? 'Cargando..' : <ItemDetail item={items} />}
      </>
      )
    
    
} 
export default ItemDetailContainer