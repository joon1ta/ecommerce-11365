import { React, useState, useEffect} from "react";
import {Products} from '../../listProducts'
import {useParams} from 'react-router-dom'
import {ItemList} from '../ItemList/ItemList'






export const ItemListContainer = ( ) => {

    const [items, setItems] = useState([])
    const{descriptionType} = useParams()
   

    useEffect(() => {
        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
        resolve(Products)
            }, 500)
        })
        
        promise.then((response) => {
            let itemsCategory = Products.filter (producto => producto.description === `${descriptionType}`)
                itemsCategory.length > 0 ? setItems(itemsCategory) : setItems(Products) ;
           console.log(response)
        })
        
    },[descriptionType])




  
  return (
    <div>
          <ItemList items={items} />
    </div>
        ) 
    }












   

