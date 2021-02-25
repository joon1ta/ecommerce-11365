import React from 'react';

import {Link} from 'react-router-dom'




const Item = ({item: {title, description, price, pictureUrl, id }}) => {
  
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
