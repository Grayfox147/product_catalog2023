import { Header } from '../components/header';
import { Carousel } from 'react-bootstrap';
import Footer from '../components/footer/Footer';
import phones from '../api/phones.json';
import { useMemo } from 'react';
import bannerAccesories from '../img/banner-accessories.png';
import bannerPhones from '../img/banner-phones.png';
import bannerTablets from '../img/banner-tablets.png';
import React, { useRef } from 'react';
import { BannerImage } from '../components/bannerImage';
import { ShopSection } from '../components/shopSection';
import { CardCarousel } from '../components/cardCarousel';

export const HomePage: React.FC = () => {
    const backToTopRef = useRef<HTMLDivElement>(null);

    const newModels = useMemo( () => {
        return  [...phones].sort((a, b) => b.year - a.year);
    },
    []
    );

    const hotPricesModels = useMemo(() => {
        return [...phones].sort((a, b) => (b.fullPrice - b.price) - (a.fullPrice - a.price));
    }, []);

    const backToTopClick = () => {
        backToTopRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <h1 hidden>Product Homepage</h1>
            <Header />
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
                <CardCarousel
                    phones={newModels}
                    title={'Brand new models'}
                    dataCyID={1}
                />
                <ShopSection />
                <CardCarousel
                    phones={hotPricesModels}
                    title={'Hot prices'}
                    dataCyID={2}
                />
            </div>
            <Footer backToTopClick={backToTopClick} />
        </>
    );
};