import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../components/header';
import { BurguerMenu } from '../components/burguerMenu';
import phones from '../api/phones.json';
import Footer from '../components/footer/Footer';
import { NavLink } from 'react-router-dom';
import arrowRigth from '../Icons/Chevron (Arrow Right).svg';
import { Phone } from './HomePage';

type ItemCardPageProps = {
  phoneId: number,
};

export const ItemCardPage:React.FC<ItemCardPageProps> = ({ phoneId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const backToTopRef = useRef<HTMLDivElement>(null);
    const [selectedPhoneId] = useState(phoneId);
    const [selectedPhone, setSelectedPhone] =  useState<Phone | null>(null);

    const findPhone = (phoneId: number) => {
        return phones.find((phone) => (+(phone.id) === phoneId));
    };

    useEffect(() => {
        if (selectedPhoneId) {
            setSelectedPhone(findPhone(selectedPhoneId) as Phone);
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
                    <span className='tabs_text'>Phones</span>
                    <img src={arrowRigth} alt="Next-Arrow" />
                    <span className='tabs_text'>{selectedPhone?.name}</span>
                </div>
            </div>
            <Footer backToTopClick={backToTopClick} />
        </>
    );
};