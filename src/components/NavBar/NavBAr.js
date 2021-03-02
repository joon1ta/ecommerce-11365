import React from 'react'
import './navbar.css'

import CartWidget from '../CartWidget/cartWidget'
import {NavLink} from 'react-router-dom'








export const NavBar = () => {

const links  = [
  {nombre: 'Ofertas', url: '/category/Ofertas'},
  {nombre: 'Ultimos Juegos', url: '/category/UltimosJuegos'},
  {nombre: 'Quiénes Somos', url: '/quienesSomos'},
  {nombre: 'Contactanos', url: '/contacto'}
]



    return <header>
     <nav className="navbar-items">
    
       <NavLink to='/' className="navBar-logo">
         <h4>GamerStore</h4>
       </NavLink>


     
       
       <ul className="nav-menu">
          {links.map((link, i) => {
          return (<li key={i}><NavLink className="nav-link" to={link.url}>{link.nombre}</NavLink></li>)})}
          <CartWidget/>
       </ul>
     </nav>
    </header>     
           
    
}