import React from 'react'
import './navbar.css'

import CartWidget from '../CartWidget/cartWidget'
import {NavLink} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'







export const NavBar = () => {

const links  = [
  
 
  {nombre: 'Action', url: 'Action-FPS'},
  {nombre: 'Sports', url: 'Sports'},
  {nombre: 'Strategies', url: 'Strategies'},
  {nombre: 'Arcade', url: 'Arcade'}
  
]



    return <header>
     <nav className="navbar-items">
    
       <NavLink to='/' className="navBar-logo">
         <h4>GamerStore</h4>
       </NavLink>


       <ul className="nav-menu">
       <NavLink to='/contacto' className="navBar-logo">
         <h6>Contacto</h6>
       </NavLink>
       <NavLink to='/aboutUs' className="navBar-logo">
         <h6>Quienes somos</h6>
       </NavLink>
       <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
              Categorias
          </Dropdown.Toggle>

          <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"> {links.map((link, i) => {
                  return (<li key={i}><NavLink className="nav-link" to={link.url}>{link.nombre}</NavLink></li>)})}
              </Dropdown.Item>
   
          </Dropdown.Menu>
       </Dropdown>
     
         <CartWidget/>
       </ul>
     </nav>
    </header>     
           
    
}