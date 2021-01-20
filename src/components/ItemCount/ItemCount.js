import React from 'react'
import styled from 'styled-components';

const StyleCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    font-size: 8rem;
  }

  .buttons {
    display: flex;
    width: 20%;
    justify-content: space-between;

    span {
      border-radius: 27px;
      font-size: 2rem;
      padding: 2rem;
      user-select: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const ItemCount = ({increase, decrease, onAdd, count})=> {



    return (
        <StyleCount>
        <div>
           
            <div className="buttons">
            <span onClick={decrease}>-</span>
            <h5>{count}</h5>
            <span onClick={increase}>+</span>
            </div>
            <button onClick={onAdd} className="btn btn-primary">Add to Cart</button>
        </div>
        </StyleCount>        
            ) 

}




export default ItemCount