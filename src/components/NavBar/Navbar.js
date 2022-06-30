import React from 'react'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import Carrito from "../Carrito/Carrito";
import { NavLink } from 'react-router-dom';
const Navbar1 = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand>Mi tienda</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className={"navlink"} to="/">Inicio</NavLink>
          <NavLink className={"navlink"} to="/produc">Productos</NavLink>
          <NavDropdown title="Ropa" className='navlink2'>
            <NavLink className={"navlink"} to="/category/2">Ropa Hombre</NavLink>
            <NavDropdown.Divider />
            <NavLink className={"navlink"} to="/category/1">Ropa Mujer</NavLink>
          </NavDropdown>
          <NavLink className={"navlink"} to="/cart">Carrito</NavLink>
        </Nav>
      </Navbar.Collapse>
      <Carrito/>
    </Container>
  </Navbar>

  )
}

export default Navbar1