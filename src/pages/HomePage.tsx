import { Header } from '../components/header';
import { Carousel } from 'react-bootstrap';
import Footer from '../components/footer/Footer';
import phones from '../api/phones.json';
import { PhoneList } from '../components/phoneList/PhoneList';
import { useMemo, useState } from 'react';
import bannerAccesories from '../img/banner-accessories.png';
import bannerPhones from '../img/banner-phones.png';
import bannerTablets from '../img/banner-tablets.png';
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
    const newModels = useMemo( () => {
        return  [...phones].sort((a, b) => b.year - a.year).slice(0, 7);
    },
    []
    );

    const hotPricesModels = useMemo(() => {
        return [...phones].sort((a, b) => (b.fullPrice - b.price) - (a.fullPrice - a.price)).slice(0, 7);
    }, []);

    const backToTopRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [visibleNewModels, setVisibleNewModels] = useState<Phone[]>(newModels);


    const handleFwButton = () => {
        if (visibleNewModels.length > 3) {
            const result = visibleNewModels.slice(1, 7);
            setVisibleNewModels(result);
        }

    };

    const handleRwButton = () => {
        // logic
    };

    const backToTopClick = () => {
        backToTopRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleToggleButton = () => {
        setIsOpen((state) => !state);
    };

    return (
        <>
            <h1 hidden>Product Homepage</h1>
            <Header handleToggleButton={handleToggleButton} isOpen={isOpen} />
            {isOpen && (
                <BurguerMenu  handleOpen={handleToggleButton} />
            )}
            <div className='main' ref={backToTopRef}>
                <div data-cy="welcome and new models">
                    <h1 className='main_title'>Welcome to Nice Gadgets store!</h1>
                    <Carousel>
                        <Carousel.Item interval={5000}>
                            <BannerImage />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={bannerAccesories} alt="accesories" className='carousel_image d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={bannerPhones} alt="phones" className='carousel_image d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={bannerTablets} alt="tablets" className='carousel_image d-block w-100'/>
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
                                onClick={handleRwButton}
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
                    <PhoneList phones={visibleNewModels} />
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