import { React, Fragment} from "react";
import Item from "../Item/item";




export const ItemList = ({items}) => {








    return (
        <Fragment>
        
        {items.map(item => 
        <Item  
        key={item.id}
        item={item}
              
        />)}
        
        </Fragment>
    )
}



