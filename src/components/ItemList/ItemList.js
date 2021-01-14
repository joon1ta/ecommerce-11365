import { React } from "react";
import Item from  "../Item/item"


export const ItemList = ({items}) => {
    return (
        <React.Fragment>
        
        {items && items.map(item => <Item key={item.id} item={item} />)}
        
        </React.Fragment>
    )
}