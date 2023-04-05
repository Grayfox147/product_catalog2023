import React from 'react';
import header_logo from '../../Icons/logo__header_phone.svg';
import {
  Nav,
  Navbar,
  Container,
} from 'react-bootstrap';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img src={header_logo} alt="header_logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='header__menu__opener'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='header_link'>Home</Nav.Link>
            <Nav.Link href="#link" className='header_link'>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
};