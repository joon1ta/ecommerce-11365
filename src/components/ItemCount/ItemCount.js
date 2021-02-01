import React from 'react'




const ItemCount = ({minStock,maxStock, increase, decrease, onAdd, count})=> {



    return (
      
        <div>
            <h5>Cantidad:</h5>
            <div className="buttons" style={{display:"flex",justifyContent:"center",margin:"10px 0 10px 0"}}>
            <button className="btn btn-primary" onClick={decrease} disabled={count === minStock}>-</button>
            <h5 style={{margin:"5px 5px 0 5px"}}>{count}</h5>
            <button className="btn btn-primary" onClick={increase} disabled={count === maxStock}>+</button>
            </div>
            <button  onClick={onAdd} className="btn btn-primary">Add to Cart</button>
        </div>
             
            ) 

}




export default ItemCount