import React, {useState} from 'react'




const ItemCount = ({minStock,maxStock,onAdd})=> {
    const [counter, setCounter] = useState(minStock)
    const [stock, setStock] = useState(maxStock)

    const increase = () => {
        counter < maxStock && setCounter(counter + 1)
        counter < maxStock && setStock(stock - 1)
    }
    const decrease = () => {
        counter > minStock && setCounter(counter - 1)
        counter > minStock && setStock(counter + 1)
    }

    onAdd(counter)
    return (
      
        <div>
            <h5>Cantidad:</h5>
            <div className="buttons" style={{display:"flex",justifyContent:"center",margin:"10px 0 10px 0"}}>
            <button className="btn btn-primary" onClick={decrease} disabled={counter === minStock}>-</button>
            <h5 style={{margin:"5px 5px 0 5px"}}>{counter}</h5>
            <button className="btn btn-primary" onClick={increase} disabled={counter === maxStock}>+</button>
            </div>
            <p>Unidades Disponibles: { stock-minStock }</p>
        </div>
             
            ) 

}




export default ItemCount