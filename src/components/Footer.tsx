import * as React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container className='footer_container'>
        <Row>
          <Col className='text-center'>
          Copyright &copy;
          </Col>
        </Row>
      </Container>
    </footer>
   );
}

export default Footer;