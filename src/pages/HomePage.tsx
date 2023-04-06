import { Header } from "../components/Header"
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Iphone14 from '../img/Iphone14Pro_Home-Sm.jpg';
import Iphone142 from '../img/Iphone 14 Silver 128Gb.png';
import { PhoneCard } from "../components/PhoneCard";
import Footer from "../components/Footer";

export const HomePage: React.FC = () => {
  return (
    <>
    <h1 hidden>Product Catalog</h1>
    <Header />
    <body className='main'>
      <section>
        <h1 className='main_title'>Welcome to Nice Gadgets store!</h1>
        <Carousel>
          <Carousel.Item interval={5000}>
            <img
              src={Iphone14}
              alt="Iphone14ProBeyond"
              className='d-block w-100' />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Iphone142}
              alt="Iphone14ProBeyond"
              className='d-block w-100' />
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
        <PhoneCard />
      </section>
    </body>
    <Footer />
    </>
  )
}