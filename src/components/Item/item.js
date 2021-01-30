import React from 'react';
import {CountContainer} from '../ItemCountContainer/ItemCountContainer';
import {Link} from 'react-router-dom'




const Item = ({title, description, price, pictureUrl, id }) => {
  console.log(id)
  return (
  
      <div style={{marginBottom: 35,display: 'inline-block' }} >
        <Link to={`/itemDetail/${id}`}>
        <img style={{padding: 15,width: 300,height: 450}} src={pictureUrl} alt={id}/>
        </Link>
        <h5 >{title}</h5>
        <p>Precio: ${price}</p>
       
        <p>Estilo: {description}</p>
     
      </div>
  
  );
};

export default Item;
