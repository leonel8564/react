import React from 'react'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import Carrito from "../Carrito/Carrito";
import { NavLink } from 'react-router-dom';
const Navbar1 = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">mi tienda</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/">inicio</NavLink>
          <NavLink to="/produc">productos</NavLink>
          <NavDropdown title="Ropa" id="basic-nav-dropdown">
            <NavLink to="/category/Hombre">Ropa Hombre</NavLink>
            <NavDropdown.Divider />
            <NavLink to="/category/Mujer">Ropa Mujer</NavLink>
          </NavDropdown>
          <Nav.Link href="#link">nosotros</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Carrito/>
    </Container>
  </Navbar>

  )
}

export default Navbar1