import React from 'react';
import {
    Card,
    Button,
} from 'react-bootstrap';
import { FiHeart } from 'react-icons/fi';
import { Phone } from '../../types/Phone';
import { Link } from 'react-router-dom';

type PhoneCardProps = {
phone: Phone
};

export const PhoneCard: React.FC<PhoneCardProps> = ({
    phone,
}) => {
    const {
        image,
        name,
        price,
        screen,
        capacity,
        ram,
        itemId,
    }=phone;

    return (
        <Card className='card'>
            <div className='card-image_container'>
                <Link
                    to={`/ItemCardPage/${itemId}`}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Card.Img
                        variant='top'
                        src={`product_catalog2023/${image}`}
                        className='card-image'
                    />
                </Link>
            </div>
            <Card.Body>
                <Link to={`/ItemCardPage/${itemId}`} style={{ textDecoration: 'none' }}>
                    <Card.Title style={{ color: '#f1f2f9' }} className='card_title'>
                        {name}
                    </Card.Title>
                </Link>
                <Card.Subtitle className='card_subtitle'>
                      ${price}
                </Card.Subtitle>
                <div className='card_line'></div>
                <div className='card_text_container'>
                    <div className='card_specs'>
                        <div className='card_text'>Screen</div>
                        <div className='card_value'>{screen}</div>
                    </div>
                    <div className='card_specs'>
                        <div className='card_text'>Capacity</div>
                        <div className='card_value'>{capacity}</div>
                    </div>
                    <div className='card_specs'>
                        <div className='card_text'>RAM</div>
                        <div className='card_value'>{ram}</div>
                    </div>
                </div>
                <div className='card_btn_container'>
                    <Button>Add to cart</Button>
                    <button
                        className='like_button'
                    >
                        <FiHeart className='heart'/>
                    </button>
                </div>
            </Card.Body>
        </Card>
    );
};
