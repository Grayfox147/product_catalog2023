import { Header } from '../components/header';
import { Carousel } from 'react-bootstrap';
import Iphone14 from '../img/Iphone14Pro_Home-Sm.jpg';
import Footer from '../components/footer/Footer';
import phones from '../api/phones.json';
import { PhoneList } from '../components/phoneList/PhoneList';
import { useState } from 'react';
import IphoneGray from '../img/image 6.png';
import IphoneGray2 from '../img/image 5.png';
import IphoneGray3 from '../img/image 7.png';
import CarouselBanner from '../img/BannerCarousel.jpg';
import { PhoneListWithDiscount } from '../components/PhoneListWDiscount/PhoneListWithDiscount';
import { BurguerMenu } from '..//components/burguerMenu';
import React, { useRef } from 'react';

const newModels = [...phones].sort((a, b) => b.year - a.year);
const hotPricesModels = [...phones].sort((a, b) => (b.fullPrice - b.price) - (a.fullPrice - a.price));

export interface Phone {
  id: string,
  category: string,
  phoneId: string,
  itemId: string,
  name: string,
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  color: string,
  ram: string,
  year: number,
  image: string
}

export const HomePage: React.FC = () => {
    const [newModelsPhones] = useState(newModels.slice(0, 7));
    const [hotPricingModels] = useState(hotPricesModels.slice(0, 7));
    const backToTopRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleFwButton = () => {
    // onClick I should show or alter the slice method.
    };

    const backToTopClick = () => {
        backToTopRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleToggleButton = () => {
        setIsOpen((state) => !state);
    };

    return (
        <>
            <h1 hidden>Product Catalog</h1>
            <Header handleToggleButton={handleToggleButton} isOpen={isOpen} />
            {isOpen && (
                <BurguerMenu />
            )}
            <div className='main' ref={backToTopRef}>
                <div data-cy="welcome and new models">
                    <h1 className='main_title'>Welcome to Nice Gadgets store!</h1>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <img
                                src={Iphone14}
                                alt="Iphone14ProBeyond"
                                className='d-block w-100' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={CarouselBanner}
                                alt='banner'
                                className='carousel_banner'
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div data-cy="card_carousel">
                    <div className="main_subtitle_container">
                        <h2 className='main_subtitle'>Brand new models</h2>
                        <div className='main_btns'>
                            <button
                                className="link_button"
                                data-cy="prevLink"
                                // onClick={() => {}}
                            >
                              «
                            </button>
                            <button
                                className="link_button"
                                data-cy="prevLink"
                                onClick={handleFwButton}
                            >
                              »
                            </button>
                        </div>
                    </div>
                    <PhoneList phones={newModelsPhones} />
                </div>
                <h2 className="main_subtitle" style={{ marginBottom: '24px'  }}>Shop by category</h2>
                <div
                    data-cy="shop and hot prices"
                    className='shop_container'
                >
                    <div>
                        <div className="shop_box">
                            <img
                                src={IphoneGray}
                                alt="grayphone"
                                className="shop_image"
                            />
                        </div>
                        <h2 className="shop_title2">Mobile phones</h2>
                        <p className="shop_subtitle">95 models</p>
                    </div>
                    <div>
                        <div className="shop_box2">
                            <img
                                src={IphoneGray2}
                                alt="grayphone"
                                className="shop_image"
                            />
                        </div>
                        <h2 className="shop_title2">Tablets</h2>
                        <p className="shop_subtitle">24 models</p>
                    </div>
                    <div>
                        <div className="shop_box3">
                            <img
                                src={IphoneGray3}
                                alt="grayphone"
                                className="shop_image"
                            />
                        </div>
                        <h2 className="shop_title2">Accesories</h2>
                        <p className="shop_subtitle">100 models</p>
                    </div>
                </div>
                <div data-cy="card_carousel">
                    <div className="main_subtitle_container">
                        <h2 className='main_subtitle' style={{ marginBottom: '24px'  }}>Hot prices</h2>
                        <div className='main_btns'>
                            <button
                                className="link_button"
                                data-cy="prevLink"
                                // onClick={() => {}}
                            >
                              «
                            </button>
                            <button
                                className="link_button"
                                data-cy="prevLink"
                                onClick={handleFwButton}
                            >
                              »
                            </button>
                        </div>
                    </div>
                    <PhoneListWithDiscount phones={hotPricingModels} />
                </div>
            </div>
            <Footer backToTopClick={backToTopClick} />
        </>
    );
};