import React from 'react';
import {CountContainer} from '../ItemCountContainer/ItemCountContainer';




const Item = ({ title, desc, price, item }) => {
  return (
  
      <div style={{marginBottom: 35,display: 'inline-block' }} >
        <img style={{padding: 15,width: 300,height: 450}} src={item} alt={title}/>
        <h5 >{title}</h5>
        <p>${price}</p>
        <CountContainer maxStock={10}
                   minStock={0}
        
        />
        <p>{desc}</p>
      <div >
        <button className="btn btn-primary">Comprar</button>
      </div>
      </div>
  
  );
};

export default Item;
