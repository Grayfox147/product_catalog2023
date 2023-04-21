import React from 'react';
import {
    Card,
    Button,
} from 'react-bootstrap';
import { FiHeart } from 'react-icons/fi';
import { Phone } from '../../pages/HomePage';

type PhoneCardProps = {
phone: Phone
};

export const PhoneCardWithdDiscount: React.FC<PhoneCardProps> = ({ phone }) => {
    const {
        image,
        name,
        price,
        screen,
        capacity,
        ram,
        fullPrice,
    }=phone;

    return (
        <Card className='card'>
            <div className='card-image_container'>
                <Card.Img variant='top' src={`product_catalog2023/${image}`} className='card-image'/>
            </div>
            <Card.Body>
                <Card.Title style={{ color: '#f1f2f9' }} className='card_title'>
                    {name}
                </Card.Title>
                <div className='card_subtitle_container'>
                    <Card.Subtitle className='card_subtitle'>
              ${price}
                    </Card.Subtitle>
                    <Card.Subtitle className='card_subtitle_dashed'>
            ${fullPrice}
                    </Card.Subtitle>
                </div>
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
                <div className='card_btn_container'>
                    <Button>Add to cart</Button>
                    <button className='like_button'>
                        <FiHeart className='heart'/>
                    </button>
                </div>
            </Card.Body>
        </Card>
    );
};
