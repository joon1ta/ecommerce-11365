import React from 'react'
import './navbar.css'
import CartWidget from '../CartWidget/cartWidget'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

export const NavBar = () => {

    return <>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">StoreForGamers</Navbar.Brand>
      <Nav className="mr-auto">
      <NavDropdown title="Categories" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Strategies</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Simulation</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Shooter</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.5">Best Sellers</NavDropdown.Item>
      </NavDropdown>
        <Nav.Link href="#features">News</Nav.Link>
        <Nav.Link href="#pricing">Help</Nav.Link>
      </Nav>
      <CartWidget />
      <Form inline>
        
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search game</Button>
      </Form>
    </Navbar>
    </>     
           
    
}