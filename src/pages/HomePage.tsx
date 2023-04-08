import { Header } from "../components/Header"
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Iphone14 from '../img/Iphone14Pro_Home-Sm.jpg';
import Iphone142 from '../img/Iphone 14 Silver 128Gb.png';
import Footer from "../components/Footer";
import phones from '../api/phones.json';
import { PhoneList } from "../components/PhoneList";
import { useState } from "react";
import { PhoneCarousel } from "../components/PhoneCarousel";

export interface Phone {
  id: string,
  category: string,
  phoneId: string,
  itemId: string,
  name: string,
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  color: string,
  ram: string,
  year: number,
  image: string
};

const findPhoneById = (phoneId: number) => {
  return phones.find((phone) => +(phone.id) === phoneId)
};

export const HomePage: React.FC = () => {
  const [visiblePhone, setVisiblePhone] = useState<Phone>(phones[0]);
  const [selectedPhoneId, setSelectedPhoneId] = useState(1);

  const handleFwButton = () => {

    setSelectedPhoneId((current) => current + 1);
    let currentPhone = findPhoneById(selectedPhoneId);

    if (currentPhone) {
      setVisiblePhone(currentPhone);
    }

    // currentPhoneId + 1
    // return phone

  };

  return (
    <>
    <h1 hidden>Product Catalog</h1>
    <Header />
    <div className='main'>
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
            <a
            data-cy="prevLink"
            className="card-link"
            href="/"
            onClick={() => {}}
          >
            «
          </a>
          <a
            data-cy="nextLink"
            className="card-link"
            href="/"
            onClick={handleFwButton}
          >
             »
          </a>
            </Col>
          </Row>
        </Container>
        <Row>
        <PhoneCarousel phone={visiblePhone} />
        <PhoneCarousel phone={visiblePhone} />
        </Row>
        <PhoneList phones={phones} />
      </section>
    </div>
    <Footer />
    </>
  )
}