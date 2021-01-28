import React, { useState } from 'react'
import './navbar.css'

import CartWidget from '../CartWidget/cartWidget'
import {NavLink} from 'react-router-dom'







export const NavBar = () => {

const [links, setLinks] = useState([
  {nombre: 'Quienes Somos', url: '/aboutUs'},
  {nombre: 'Categorias', url: '/categorias'},
  {nombre: 'Contacto', url: 'contacto'}
])



    return <header>
     <nav className="navbar-items">
       <NavLink to='/' className="navBar-logo">
         <h4>GamerStore</h4>
       </NavLink>
       <ul className="nav-menu">
         {links.map((link, i) => {
           return (<li key={i}><NavLink className="nav-link" to={link.url}>{link.nombre}</NavLink></li>)
         })}
         <NavLink to='/carrito'><CartWidget/></NavLink>
       </ul>
     </nav>
    </header>     
           
    
}