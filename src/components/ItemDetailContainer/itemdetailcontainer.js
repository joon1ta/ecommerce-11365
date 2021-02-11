import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
//import {Products} from '../../listProducts';
import ItemDetail from '../ItemDetail/itemDetail' ;
import { getFirestore } from '../../firebase'







 const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

  const{id} = useParams()


useEffect(() => {
 const db = getFirestore()
 const getItem = db.collection('items').doc(id)

 getItem.get().then((querySnapshot) => {
   setItems(querySnapshot.data())
   setLoading(false)
 })
 .catch((err) => {console.log(err)})
}, [id])
   
      return (
      <>
      {loading ? 'Cargando..' : <ItemDetail item={items} />}
      </>
      )
    
    
} 
export default ItemDetailContainer