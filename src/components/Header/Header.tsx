import header_logo from '../../Icons/logo__header_phone.svg';
import {
  Nav,
  Navbar,
  Container,
} from 'react-bootstrap';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <Navbar bg="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">
        <img src={header_logo} alt="header_logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='header__menu__opener'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className='header_link'
            >
              HOME
            </Nav.Link>
            <Nav.Link
             href="#link"
             className='header_link'
             >
              PHONES
            </Nav.Link>
            <Nav.Link
             href="#link"
             className='header_link'
             >
              TABLETS
            </Nav.Link>
            <Nav.Link
             href="#link"
             className='header_link'
             >
              ACCESORIES
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
};
