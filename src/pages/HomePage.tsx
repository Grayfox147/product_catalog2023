import { Header } from "../components/Header"
import { Carousel } from 'react-bootstrap';
import Iphone14 from '../img/Iphone14Pro_Home-Sm.jpg';
import Iphone142 from '../img/Iphone 14 Silver 128Gb.png';
import Footer from "../components/Footer";
import phones from '../api/phones.json';
import { PhoneList } from "../components/PhoneList";
import { useState } from "react";


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

export const HomePage: React.FC = () => {
  const [visiblePhones] = useState(phones.slice(0, 7));

  const handleFwButton = () => {
    // onClick I should show or alter the slice method.
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
          <div className="main_subtitle_container">
            <h2 className='main_subtitle'>Brand new <br /> models</h2>
            <button
              className="link_button"
              data-cy="prevLink"
              onClick={() => {}}
            >
              «
            </button>
            <button
              className="link_button"
              data-cy="prevLink"
              onClick={handleFwButton}
            >
              »
            </button>
          </div>
          <PhoneList phones={visiblePhones} />
        <h2>Shop by category</h2>
      </section>
    </div>
    <Footer />
    </>
  )
}