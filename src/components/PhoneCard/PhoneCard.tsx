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

export const PhoneCard: React.FC<PhoneCardProps> = ({ phone }) => {
    const {
        image,
        name,
        price,
        screen,
        capacity,
        ram,
    }=phone;

    return (
        <Card className='card'>
            <div className='card-image_container'>
                <Card.Img
                    variant='top'
                    src={`product_catalog2023/${image}`}
                    className='card-image'
                />
            </div>
            <Card.Body>
                <Card.Title style={{ color: '#f1f2f9' }} className='card_title'>
                    {name}
                </Card.Title>
                <Card.Subtitle className='card_subtitle'>
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
