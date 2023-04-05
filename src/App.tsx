import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Header } from './components/Header/Header';
import Footer from './components/Footer';
import Iphone14 from './img/Iphone14Pro_Home-Sm.jpg'
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <div className="App">
    <Header />
    <body className='main'>
     <h1 className='main_title'>Welcome to Nice Gadgets store!</h1>
      <Carousel>
        <Carousel.Item>
        <img
          src={Iphone14}
          alt="Iphone14ProBeyond"
          className='d-block w-100'
          />
        </Carousel.Item>
      </Carousel>
      <Container>
      <Row>
        <Col xs={8}>
          <h2 className='main_subtitle'>Brand new models</h2>
        </Col>
        <Col xs={4}>
          <button>+</button>
        </Col>
      </Row>
      </Container>
    </body>
    <Footer />
    </div>
  );
}

export default App;
