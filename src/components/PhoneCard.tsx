import React from 'react';
import {
  Card,
  Button,
} from 'react-bootstrap';
import Iphone14 from '../img/Iphone 14 Silver 128Gb.png';
import { FiHeart } from 'react-icons/fi';

export const PhoneCard: React.FC = () => {
  return (
    <Card className='card'>
      <Card.Img variant='top' src={Iphone14} className='card_image'/>
      <Card.Body>
        <Card.Title style={{ color: "#f1f2f9" }} className='card_title'>
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </Card.Title>
        <Card.Subtitle style={{ color: "#f1f2f9" }} className='card_subtitle'>
          $999
        </Card.Subtitle>
        <div className='card_line'></div>
        <div className='card_text_container'>
          <div className='card_text_left'>
            Screen <br />
            Capacity <br />
            RAM
          </div>
          <div className='card_text_rigth'>
            6.1” OLED <br />
            128 GB <br />
            6 GB
          </div>
        </div>
        <Button>Add to cart</Button>
        <button className='like_button'>
          <FiHeart className='heart'/>
        </button>
      </Card.Body>
    </Card>
   );
}
