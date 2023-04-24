import React, { useRef, useState } from 'react';
import { Header } from '../components/header';
import { BurguerMenu } from '../components/burguerMenu';
import Footer from '../components/footer/Footer';
import { NavLink } from 'react-router-dom';
import arrowRigth from '../Icons/Chevron (Arrow Right).svg';

export const CatalogPage: React.FC = () => {
    const backToTopRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const backToTopClick = () => {
        backToTopRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleToggleButton = () => {
        setIsOpen((state) => !state);
    };
    return (
        <>
            <h1 hidden>Product catalog</h1>
            <Header handleToggleButton={handleToggleButton} isOpen={isOpen} />
            {isOpen && (
                <BurguerMenu handleOpen={handleToggleButton}/>
            )}
            <div className='main' ref={backToTopRef} data-cy="mobile-phones-catalog">
                <h1>HELLO</h1>
                <div className="tabs_path">
                    <NavLink
                        className='homeIcon'
                        to='/'
                    />
                    <img src={arrowRigth} alt="Next-Arrow" />
                </div>
            </div>
            <Footer backToTopClick={backToTopClick} />
        </>
    );
};