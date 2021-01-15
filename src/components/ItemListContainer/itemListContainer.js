import { React, useState, useEffect } from "react";
import {ItemList} from '../ItemList/ItemList'

const productos = [{
    id: 1,
    title: "Call of Duty",
    description: "Action Fps",
    price: 50,
    pictureUrl: "www.google.com/"
}, 
{
    id: 2,
    title: "Call of Duty",
    description: "Action Fps",
    price: 50,
    pictureUrl: "www.google.com/"
},
{
    id: 3,
    title: "Call of Duty",
    description: "Action Fps",
    price: 50,
    pictureUrl: "www.google.com/"
},
{
    id: 4,
    title: "Call of Duty",
    description: "Action Fps",
    price: 50,
    pictureUrl: "www.google.com/"
}]





const ItemListContainer = ( ) => {

    const [items, setItems] = useState([])
useEffect(() => {
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
    resolve(productos)
        }, 2000)
    })
    
    promise.then((response) => {
       setItems(response)
    })
},[])




    return (
<div>
      <ItemList items={items} />
</div>
    ) 
}

export default ItemListContainer