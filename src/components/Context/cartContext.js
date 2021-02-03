import React, {createContext, useState, useContext} from 'react'


const StoreContext = createContext()
const useCartContext = () => useContext(StoreContext)



export const StoreProvider = ({children}) =>{


const [productos, setProductos] = useState([])

const agregarItem = ( item, quantity ) => {
    const inCart = productos.find((i) => i.id === item.id)

    if(inCart) {
        inCart.quantity += quantity
        setProductos([...productos])
    } else {
        setProductos([...productos, {...item, quantity}])
    }
}

const borrarItem = (id) => {
    productos.splice(
        productos.findIndex((i) => i.id === id), 1
    )
    setProductos([...productos])
}

return (
    <StoreContext.Provider value = {{ productos, agregarItem, borrarItem }}>
        {children}
    </StoreContext.Provider>
)

}

export default useCartContext