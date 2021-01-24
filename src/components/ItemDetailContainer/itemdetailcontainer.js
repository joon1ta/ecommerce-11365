import { React} from "react";
import {useParams} from 'react-router-dom'







export const ItemDetailContainer = ( ) => {

const {itemId} = useParams()

    return (
<div>
      <h1>Detalle del producto</h1>
</div>
    ) 
}
