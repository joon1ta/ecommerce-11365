import { React, Fragment, useState, useEffect } from "react";
import Item from "../Item/item";

const productos = [{
    id: 1,
    title: "Call of Duty",
    description: "Action Fps",
    price: 50,
    pictureUrl: "https://i.imgur.com/3ioRBEr.jpg"
}, 
{
    id: 2,
    title: "Fifa 21",
    description: "Sports",
    price: 20,
    pictureUrl: "https://i.imgur.com/KsQ97vd.jpg"
},
{
    id: 3,
    title: "Age of Empires 3",
    description: "Strategies",
    price: 40,
    pictureUrl: "https://i.imgur.com/j4pcXLj.jpg"
},
{
    id: 4,
    title: "Crash",
    description: "Arcade",
    price: 50,
    pictureUrl: "https://i.imgur.com/o72LVj2.jpg"
}]

export const ItemList = () => {

const [items, setItems] = useState([])
useEffect(() => {
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
    resolve(productos)
        }, 2000)
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
             
              desc={item.description}
              key={item.id}
              item={item.pictureUrl}
              price={item.price}
              title={item.title}  
              
        />)}
        
        </Fragment>
    )
}