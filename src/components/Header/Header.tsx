import React from 'react';
import header_logo from '../../Icons/logo__header_phone.svg';
import { Container, Row} from 'react-bootstrap';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <Container className="header__nav">
        <Row>
          <div>
            <a href="#home" className='header_link' >
              <img src={header_logo} alt="header_logo" />
            </a>
          </div>
          <div>
            <button className='header__menu__opener' />
          </div>
        </Row>
      </Container>
    </header>
  );
};

