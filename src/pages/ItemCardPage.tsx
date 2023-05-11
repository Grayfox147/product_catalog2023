import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Header } from '../components/header';
import { BurguerMenu } from '../components/burguerMenu';
import Footer from '../components/footer/Footer';
import { Link, NavLink, useMatch } from 'react-router-dom';
import arrowRigth from '../Icons/Chevron (Arrow Right).svg';
import arrorLeft from '../Icons/Chevron (Arrow left).svg';
import { PhoneDetails } from '../types/Phone';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import phones from '../api/phones.json';
import { FiHeart } from 'react-icons/fi';
import { CardCarousel } from '../components/cardCarousel';

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

    const hotPricesModels = useMemo(() => {
        return [...phones].sort((a, b) => (b.fullPrice - b.price) - (a.fullPrice - a.price));
    }, []);


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

    const updateUrlByColor = (color: string) => {
        const splittedId = selectedItemId?.split('-');

        if (!splittedId) {
            return selectedItemId;
        }

        splittedId[splittedId.length - 1] = color;

        return splittedId.join('-');
    };

    const updateUrlByCapacity = (capacity: string) => {
        const splittedId = selectedItemId?.split('-');

        if (!splittedId) {
            return selectedItemId;
        }

        const updatedId = splittedId.map((part) => {
            if (part.includes('gb')) {
                return capacity.toLowerCase();
            }

            return part;
        });

        return updatedId.join('-');
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
                        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <h3 className='item_subtitle'>Available colors</h3>
                            <p className='item_subtitleId'>{selectedPhone.namespaceId}</p>
                        </div>
                        <div className='color-palette_container'>
                            {selectedPhone.colorsAvailable.map((color) => (
                                <Link
                                    to={`/ItemCardPage/${updateUrlByColor(color)}`}
                                    key={color}
                                    style={{ backgroundColor: getProductColors(color) }}
                                    className={classNames(
                                        'color-palette_item',
                                        { 'color-palette_item-active': selectedPhone.color === color }
                                    )}
                                />
                            ))}
                        </div>
                        <div  className='divisory-line'/>
                        <p className='item_subtitle' style={{ marginBottom: '8px' }}>Select capacity</p>
                        <div className='capacity-button_container'>
                            {selectedPhone.capacityAvailable.map((capacity) => (
                                <Link
                                    key={capacity}
                                    to={`/ItemCardPage/${updateUrlByCapacity(capacity)}`}
                                    className={classNames(
                                        'capacity-btn',
                                        { 'capacity-btn-active': selectedPhone.capacity === capacity }
                                    )}
                                >
                                    {capacity}
                                </Link>
                            ))}
                        </div>
                        <div  className='divisory-line' style={{ marginBottom: '38px' }}/>
                        <div className='card_subtitle_container'>
                            <div className='card_subtitle'>
                                ${selectedPhone.priceDiscount}
                            </div>
                            <div className='card_subtitle_dashed'>
                                ${selectedPhone.priceRegular}
                            </div>
                        </div>
                        <div className='card_btn_container' style={{ marginBottom: '32px' }}>
                            <Button style={{ width: '80%' }}>Add to cart</Button>
                            <button className='like_button'>
                                <FiHeart className='heart'/>
                            </button>
                        </div>
                        <div className='card_text_container' style={{ marginBottom: '56px' }}>
                            <div className='card_specs'>
                                <div className='card_text'>Screen</div>
                                <div className='card_value'>{selectedPhone.screen}</div>
                            </div>
                            <div className='card_specs'>
                                <div className='card_text'>Resolution</div>
                                <div className='card_value'>{selectedPhone.resolution}</div>
                            </div>
                            <div className='card_specs'>
                                <div className='card_text'>Processor</div>
                                <div className='card_value'>{selectedPhone.processor}</div>
                            </div>
                            <div className='card_specs'>
                                <div className='card_text'>RAM</div>
                                <div className='card_value'>{selectedPhone.ram}</div>
                            </div>
                        </div>
                        <h2 className='cardSection-title'>About</h2>
                        <div  className='divisory-line' style={{ marginBottom: '32px' }}/>
                        {selectedPhone.description.map((content) => (
                            <>
                                <h3 className='cardSection-subtitle' key={content.title}>{content.title}</h3>
                                <p className='cardSection-text'>
                                    {content.text}
                                </p>
                            </>
                        ))}
                        <h2 className='cardSection-title' style={{ marginTop: '56px' }}>Tech specs</h2>
                        <div  className='divisory-line' style={{ marginBottom: '30px' }}/>
                        <div className='card_text_container' style={{ marginBottom: '56px' }}>
                            <div className='card_specs'>
                                <div className='card_text'>Screen</div>
                                <div className='card_value'>{selectedPhone.screen}</div>
                            </div>
                            <div className='card_specs'>
                                <div className='card_text'>Resolution</div>
                                <div className='card_value'>{selectedPhone.resolution}</div>
                            </div>
                            <div className='card_specs'>
                                <div className='card_text'>Processor</div>
                                <div className='card_value'>{selectedPhone.processor}</div>
                            </div>
                            <div className='card_specs'>
                                <div className='card_text'>RAM</div>
                                <div className='card_value'>{selectedPhone.ram}</div>
                            </div>
                            <div className='card_specs'>
                                <div className='card_text'>Built in memory</div>
                                <div className='card_value'>{selectedPhone.capacityAvailable}</div>
                            </div>
                            <div className='card_specs'>
                                <div className='card_text'>Camera</div>
                                <div className='card_value'>{selectedPhone.camera}</div>
                            </div>
                            <div className='card_specs'>
                                <div className='card_text'>Zoom</div>
                                <div className='card_value'>{selectedPhone.zoom}</div>
                            </div>
                            <div className='card_specs'>
                                <div className='card_text'>Cell</div>
                                {selectedPhone.cell.map((content) => (
                                    <div className='card_value' key={content}>{`${content}`}</div>
                                ))}
                            </div>
                        </div>
                        <CardCarousel
                            phones={hotPricesModels}
                            title={'You may also like'}
                            dataCyID={2}
                        />
                    </>
                )}
            </div>
            <Footer backToTopClick={backToTopClick} />
        </>
    );
};