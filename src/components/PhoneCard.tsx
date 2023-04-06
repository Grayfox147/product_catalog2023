import React from 'react';
import {
  Card,
  Button,
} from 'react-bootstrap';
import Iphone14 from '../img/Iphone 14 Silver 128Gb.png';

export const PhoneCard: React.FC = () => {
  return (
    <Card className='card'>
      <Card.Img variant='top' src={Iphone14} />
      <Card.Body>
        <Card.Title style={{ color: "#f1f2f9" }}>
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </Card.Title>
        <Card.Subtitle style={{ color: "#f1f2f9" }}>
          $999
        </Card.Subtitle>
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
        <button>
          <i className="fa fa-heart"/>
        </button>
      </Card.Body>
    </Card>
   );
}
