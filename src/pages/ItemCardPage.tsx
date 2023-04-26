import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../components/header';
import { BurguerMenu } from '../components/burguerMenu';
import phones from '../api/phones.json';
import Footer from '../components/footer/Footer';
import { Link, NavLink, useMatch } from 'react-router-dom';
import arrowRigth from '../Icons/Chevron (Arrow Right).svg';
import arrorLeft from '../Icons/Chevron (Arrow left.svg';
import { Phone } from './HomePage';

export const ItemCardPage:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const backToTopRef = useRef<HTMLDivElement>(null);
    const match = useMatch('/ItemCardPage/:phoneitemId');
    const selectedItemId = match?.params.phoneitemId;
    const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);

    const findPhone = (phoneitemId: string) => {
        return phones.find((phone) => phone.itemId === phoneitemId);
    };

    useEffect(() => {
        if (selectedItemId) {
            setSelectedPhone(findPhone(selectedItemId) as Phone);
        }
    }, []);

    const handleToggleButton = () => {
        setIsOpen((state) => !state);
    };

    const backToTopClick = () => {
        backToTopRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <h1 hidden>ItemCardPage</h1>
            <Header handleToggleButton={handleToggleButton} isOpen={isOpen} />
            {isOpen && (
                <BurguerMenu  handleOpen={handleToggleButton} />
            )}
            <div className='main' ref={backToTopRef} data-cy="catalog-phones">
                <div className="tabs_path">
                    <NavLink
                        className='homeIcon'
                        to='/product_catalog2023'
                    />
                    <img src={arrowRigth} alt="Next-Arrow" />
                    <Link to={'/phones'} className='tabs_back-text'>Phones</Link>
                    <img src={arrowRigth} alt="Next-Arrow" />
                    {selectedPhone && (
                        <span className='tabs_text'>{selectedPhone.name}</span>
                    )}
                </div>
                <div className='tabs_back'>
                    <img src={arrorLeft} alt="Next-Arrow" />
                    <Link to={'/phones'} className='tabs_back-text'>Back</Link>
                </div>
                {selectedPhone && (
                    <>
                        <h1 className='item_title'>{selectedPhone.name}</h1>
                        <img src={`product_catalog2023/${selectedPhone.image}`} alt="phone-image" />
                        <div>

                        </div>
                    </>
                )}
            </div>
            <Footer backToTopClick={backToTopClick} />
        </>
    );
};