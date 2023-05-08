import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../components/header';
import { BurguerMenu } from '../components/burguerMenu';
import Footer from '../components/footer/Footer';
import { Link, NavLink, useMatch } from 'react-router-dom';
import arrowRigth from '../Icons/Chevron (Arrow Right).svg';
import arrorLeft from '../Icons/Chevron (Arrow left).svg';
import { PhoneDetails } from '../types/Phone';

export const ItemCardPage:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const backToTopRef = useRef<HTMLDivElement>(null);
    const match = useMatch('/ItemCardPage/:phoneitemId');
    const selectedItemId = match?.params.phoneitemId;
    const [selectedPhone, setSelectedPhone] = useState<PhoneDetails | null>(null);
    // const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState(selectedPhone?.images);
    const [currentImage, setCurrentImage] = useState('');

    const getProductColors = (color: string) => {
        const customColors = [
            { customColor: 'gold', cssColor: '#F9E5C9' },
            { customColor: 'spacegray', cssColor: '#535150' },
            { customColor: 'silver', cssColor: '#EBEBE3' },
            { customColor: 'black', cssColor: '#1F2020' },
            { customColor: 'rosegold', cssColor: '#FAD7BD' },
            { customColor: 'white', cssColor: '#FFFFFF' },
            { customColor: 'red', cssColor: '#BA0C2E' },
            { customColor: 'yellow', cssColor: '#FFE681' },
            { customColor: 'green', cssColor: '#AEE1CD' },
            { customColor: 'purple', cssColor: '#B8AFE6' },
            { customColor: 'midnightgreen', cssColor: '#4E5851' },
            { customColor: 'coral', cssColor: '#EE7762' },
        ];

        const foundColor = customColors.find((item) => item.customColor === color);

        return foundColor?.cssColor;
    };

    useEffect(() => {
        // setIsLoading(true);

        fetch(`../product_catalog2023/api/phones/${selectedItemId}.json`, {
            headers: {
                'Content-Type': 'application/json',
            } ,
        })
            .then((response) => response.json())
            .then((phoneData: PhoneDetails) => {
                setSelectedPhone(phoneData);
            })
            .catch(() => {
                alert('failed to load the phone data');
            })
            .finally(() => {
                // setIsLoading(false);
            });
    }, [selectedItemId]);

    useEffect(() => {
        setImages(selectedPhone?.images);

        if (images) {
            setCurrentImage(images[0]);
        }
    }, [selectedPhone, images]);

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
                        <div className='item-main-image_container'>
                            <img src={`../product_catalog2023/${currentImage}`} alt="Iphone"  className='item_image'/>
                        </div>
                        <div className='item-sm-images_container'>
                            {images?.map((img) => (
                                <button
                                    type='button'
                                    key={img}
                                    onClick={() => {
                                        setCurrentImage(img);
                                    }}
                                    className='item-button_image'
                                >
                                    <img src={`../product_catalog2023/${img}`} alt="Iphone" className='item-sm_image'/>
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <Footer backToTopClick={backToTopClick} />
        </>
    );
};