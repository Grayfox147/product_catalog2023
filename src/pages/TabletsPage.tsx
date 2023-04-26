import React, { useRef, useState } from 'react';
import { Header } from '../components/header';
import { BurguerMenu } from '../components/burguerMenu';
import Footer from '../components/footer/Footer';
import { Link, NavLink } from 'react-router-dom';
import arrowRigth from '../Icons/Chevron (Arrow Right).svg';
import arrorLeft from '../Icons/Chevron (Arrow left).svg';

export const TabletsPage:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const backToTopRef = useRef<HTMLDivElement>(null);

    const handleToggleButton = () => {
        setIsOpen((state) => !state);
    };

    const backToTopClick = () => {
        backToTopRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <h1 hidden>Tablets Page</h1>
            <Header handleToggleButton={handleToggleButton} isOpen={isOpen} />
            {isOpen && (
                <BurguerMenu  handleOpen={handleToggleButton} />
            )}
            <div className='main' ref={backToTopRef} data-cy="tablet-page">
                <div className="tabs_path">
                    <NavLink
                        className='homeIcon'
                        to='/product_catalog2023'
                    />
                    <img src={arrowRigth} alt="Next-Arrow" />
                    <span className='tabs_text'>Tablets</span>
                </div>
                <div className='tabs_back'>
                    <img src={arrorLeft} alt="Next-Arrow" />
                    <Link to={'/phones'} className='tabs_back-text'>Back</Link>
                </div>
                <p style={{ display: 'flex', justifyContent: 'center' }}>Website under construction, please comeback soon!</p>
            </div>
            <Footer backToTopClick={backToTopClick} />
        </>
    );
};