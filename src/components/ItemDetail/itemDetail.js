import React from 'react'

import {CountContainer} from "../ItemCountContainer/ItemCountContainer"

const ItemDetail = ({title,price,description,pictureUrl,id}) => {


    return (
        <div style={{marginBottom: 35,display: 'inline-block' }} >
       
        <img style={{padding: 15,width: 300,height: 450}} src={pictureUrl} alt={id}/>
       
        <h5 >{title}</h5>
        <p>Precio: ${price}</p>
        <CountContainer maxStock={10}
                   minStock={1}
        
        />
        <p>Estilo: {description}</p>
      <div >
        <button className="btn btn-primary">Comprar</button>
      </div>
      </div>
    )
}
export default ItemDetail 
