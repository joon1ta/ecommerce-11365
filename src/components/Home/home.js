import React from 'react'
import './home.css'
import ItemListContainer from '../ItemListContainer/itemListContainer'
export const Home = () => {

return (

<div className='homeStyle'>

    <button className='btn'>Click me</button>
    <ItemListContainer  greeting={"Welcome!, we are in maintenance"}/>
</div>

)


}