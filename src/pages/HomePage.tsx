import { Header } from '../components/header';
import { Carousel } from 'react-bootstrap';
import Iphone14 from '../img/Iphone14Pro_Home-Sm.jpg';
import Footer from '../components/footer/Footer';
import phones from '../api/phones.json';
import { PhoneList } from '../components/phoneList/PhoneList';
import { useMemo, useState } from 'react';

// import CarouselBanner from '../img/BannerCarousel.jpg';
import { PhoneListWithDiscount } from '../components/PhoneListWDiscount/PhoneListWithDiscount';
import { BurguerMenu } from '..//components/burguerMenu';
import React, { useRef } from 'react';
import { BannerImage } from '../components/bannerImage';
import { ShopSection } from '../components/shopSection';

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
    const backToTopRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const newModels = useMemo( () => {
        return  [...phones].sort((a, b) => b.year - a.year).slice(0, 7);
    },
    []
    );

    const hotPricesModels = useMemo(() => {
        return [...phones].sort((a, b) => (b.fullPrice - b.price) - (a.fullPrice - a.price)).slice(0, 7);
    }, []);

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
                            {/* <img
                                src={CarouselBanner}
                                alt='banner'
                                className='carousel_banner'
                            /> */}
                            <BannerImage />
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
                    <PhoneList phones={newModels} />
                </div>
                <ShopSection />
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
                    <PhoneListWithDiscount phones={hotPricesModels} />
                </div>
            </div>
            <Footer backToTopClick={backToTopClick} />
        </>
    );
};