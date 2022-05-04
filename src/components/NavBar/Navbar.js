import React from 'react'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
const Navbar1 = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">mi tienda</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">inicio</Nav.Link>
          <Nav.Link href="#link">producto</Nav.Link>
          <NavDropdown title="Ropa" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Ropa hombre</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Ropa mujer</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">unisex</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">nosotros</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbar1