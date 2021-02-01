import { React, Fragment} from "react";
import Item from "../Item/item";




export const ItemList = ({items}) => {








    return (
        <Fragment>
        
        {items && items.map(item => 
        <Item  
        key={item.id}
        description={item.description}
        id={item.id}
        pictureUrl={item.pictureUrl}
        price={item.price}
        title={item.title}  
              
        />)}
        
        </Fragment>
    )
}