import React, {useState} from 'react'




const ItemCount = ({minStock,maxStock,onAdd})=> {
    const [counter, setCounter] = useState(minStock)
    

    const increase = () => {
        counter < maxStock && setCounter(counter + 1)
       
    }
    const decrease = () => {
        counter > minStock && setCounter(counter - 1)
      
    }

    onAdd(counter)
    return (
      
        <div>
            <h5>Cantidad:</h5>
            <div className="buttons" style={{display:"flex",justifyContent:"center",margin:"10px 0 10px 0"}}>
            <button  onClick={decrease} disabled={counter === minStock}>-</button>
            <h5 style={{margin:"5px 5px 0 5px"}}>{counter}</h5>
            <button onClick={increase} disabled={counter === maxStock}>+</button>
            </div>
            <p>Unidades Disponibles: { maxStock-counter }</p>
        </div>
             
            ) 

}




export default ItemCount