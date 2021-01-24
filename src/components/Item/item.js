import React from 'react';
import {CountContainer} from '../ItemCountContainer/ItemCountContainer';
import {Link} from 'react-router-dom'




const Item = ({ title, desc, price, item }) => {
  return (
  
      <div style={{marginBottom: 35,display: 'inline-block' }} >
        <Link to={'/itemDetail'}>
        <img style={{padding: 15,width: 300,height: 450}} src={item} alt={title}/>
        </Link>
        <h5 >{title}</h5>
        <p>Precio: ${price}</p>
        <CountContainer maxStock={10}
                   minStock={1}
        
        />
        <p>Estilo: {desc}</p>
      <div >
        <button className="btn btn-primary">Comprar</button>
      </div>
      </div>
  
  );
};

export default Item;
