import navbar_logo from '../../Icons/logo__header_phone.svg';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineInbox } from 'react-icons/ai';

import {
    Nav,
    Navbar,
    Container,
} from 'react-bootstrap';
import classNames from 'classnames';
import React, { useState } from 'react';

export const Header: React.FC = () => {
    const [navBarIsOpen, setnavBarIsOpen] = useState(false);

    return (
        <header>
            <Navbar
                collapseOnSelect
                bg="dark"
                expand="sm"
                variant='dark'
                className={classNames(
                    {'navbar_full_height': navBarIsOpen}
                )}
                sticky='top'
            >
                <Container>
                    <Navbar.Brand href="#home" className='navbar_logo'>
                        <img src={navbar_logo} alt="navbar_logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={() => {
                            setnavBarIsOpen(!navBarIsOpen);
                        }}
                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link
                                    href="#home"
                                    className='navbar_link'
                                >
                                  HOME
                                </Nav.Link>
                                <Nav.Link
                                    href="#link"
                                    className='navbar_link'
                                >
                                  PHONES
                                </Nav.Link>
                                <Nav.Link
                                    href="#link"
                                    className='navbar_link'
                                >
                                  TABLETS
                                </Nav.Link>
                                <Nav.Link
                                    href="#link"
                                    className='navbar_link'
                                >
                                  ACCESORIES
                                </Nav.Link>
                                <Container>
                                    <button className='navbar_button'>
                                        <AiOutlineInbox style={{ color: '#f1f2f9' }}/>
                                    </button>
                                    <button className='navbar_button'>
                                        <FiHeart className='navbar_heart'/>
                                    </button>
                                </Container>
                            </Nav>
                        </Container>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
