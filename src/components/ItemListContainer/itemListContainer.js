import { React, useState, useEffect} from "react";
//import {Products} from '../../listProducts'
import {useParams} from 'react-router-dom'
import {ItemList} from '../ItemList/ItemList'
import { getFirestore } from '../../firebase'






export const ItemListContainer = ( ) => {

    const [items, setItems] = useState([])
    const{description} = useParams()
   

    useEffect(() => {
      const db = getFirestore()
      let items

      if (description){
          items = db.collection('items').where('category', '==', description)
      } else {
          items = db.collection('items')
      }

      const itemCollectionQuery = items.get()

      itemCollectionQuery.then((querySnapshot) => {
          setItems(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
      })
      .catch((err) => {console.log(err)})
        
    },[description])




  
  return (
    <div>
          <ItemList items={items} />
    </div>
        ) 
    }












   

