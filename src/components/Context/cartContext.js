import React, {createContext, useState, useContext} from 'react'


const StoreContext = createContext()
const useCartContext = () => useContext(StoreContext)



export const StoreProvider = ({children}) =>{


const [productos, setProductos] = useState([])
const [isInCart, setIsInCart] = useState(false)

const agregarItem = ( item, quantity ) => {
    const inCart = productos.find((i) => i.id === item.id)
    setIsInCart(true)
    if(inCart) {
        inCart.quantity = quantity
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
    if(productos.length === 0){
        setIsInCart(false)
    }
}

const priceTotal = () => {
    return productos.reduce((add, i) => (add += i.price * i.quantity),0)
}

const cartWidgetContador = () => {
    return productos.reduce ((add, i) => (add += i.quantity), 0)
}


const limpiarListCart = () => {
    setProductos([])
}

return (
    <StoreContext.Provider value = {{ productos, agregarItem, borrarItem, priceTotal, cartWidgetContador, isInCart, limpiarListCart }}>
        {children}
    </StoreContext.Provider>
)

}

export default useCartContext