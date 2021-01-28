import { React, Fragment, useState, useEffect } from "react";
import Item from "../Item/item";
import {Products} from '../../listProducts'



export const ItemList = () => {

const [items, setItems] = useState([])
useEffect(() => {
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
    resolve(Products)
        }, 1000)
    })
    
    promise.then((response) => {
       setItems(response)
       console.log(response)
    })
},[])






    return (
        <Fragment>
        
        {items && items.map(item => 
        <Item  
             
        description={item.description}
              key={item.id}
              pictureUrl={item.pictureUrl}
              price={item.price}
              title={item.title}  
              
        />)}
        
        </Fragment>
    )
}