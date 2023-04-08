import React from 'react';
import {
  Card,
  Button,
  Col,
} from 'react-bootstrap';
// import Iphone14 from '../img/Iphone 14 Silver 128Gb.png';
import { FiHeart } from 'react-icons/fi';
import { Phone } from '../pages/HomePage';

type PhoneCardProps = {
phone: Phone
};

export const PhoneCarousel: React.FC<PhoneCardProps> = ({ phone }) => {
  const {
    image,
    name,
    price,
    screen,
    capacity,
    ram,
  }=phone;

  return (
    <Col className='d-flex'>
      <Card className='card flex-fill'>
        <Card.Img variant='top' src={image} className='card_image'/>
        <Card.Body>
          <Card.Title style={{ color: "#f1f2f9" }} className='card_title'>
            {name}
          </Card.Title>
          <Card.Subtitle style={{ color: "#f1f2f9" }} className='card_subtitle'>
            ${price}
          </Card.Subtitle>
          <div className='card_line'></div>
          <div className='card_text_container'>
            <div className='card_text_left'>
              Screen <br />
              Capacity <br />
              RAM
            </div>
            <div className='card_text_rigth'>
              {screen}<br />
              {capacity} <br />
              {ram}
            </div>
          </div>
          <Button>Add to cart</Button>
          <button className='like_button'>
            <FiHeart className='heart'/>
          </button>
        </Card.Body>
      </Card>
    </Col>
   );
}