import React from 'react'

import {CountContainer} from "../ItemCountContainer/ItemCountContainer"

const ItemDetail = ({item}) => {





  console.log(item)
    return (
        <div style={{marginBottom: 35,display: 'inline-block' }} >
       
        <img style={{padding: 15,width: 300,height: 450}} src={item.pictureUrl} alt={item.id}/>
       
        <h5 >{item.title}</h5>
        <p>Precio: ${item.price}</p>
        <CountContainer maxStock={10}
                   minStock={1}
        
        />
        <p>Estilo: {item.description}</p>
     
      </div>
    )
}
export default ItemDetail 
