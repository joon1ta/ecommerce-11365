import React from 'react';
import "../Item/item.css"
import {Link} from 'react-router-dom'




const Item = ({item: {title, description, price, pictureUrl, id }}) => {
  
  return (
  
      <div className="card-product" >
        <Link to={`/itemDetail/${id}`}>
        <img style={{padding: 15,width: 300,height: 450}} src={pictureUrl} alt={id}/>
        </Link>
        <h5 >{title}</h5>
        <p>Precio: ${price}</p>
       
        <p>Estilo: {description}</p>
        <Link to={`/itemDetail/${id}`}> <button>Ver Juego</button> </Link>
      </div>
  
  );
};

export default Item;
