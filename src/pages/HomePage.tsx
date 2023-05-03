import { Header } from '../components/header';
import { Carousel } from 'react-bootstrap';
import Footer from '../components/footer/Footer';
import phones from '../api/phones.json';
import { useMemo, useState } from 'react';
import bannerAccesories from '../img/banner-accessories.png';
import bannerPhones from '../img/banner-phones.png';
import bannerTablets from '../img/banner-tablets.png';
import { BurguerMenu } from '..//components/burguerMenu';
import React, { useRef } from 'react';
import { BannerImage } from '../components/bannerImage';
import { ShopSection } from '../components/shopSection';
import { CardCarousel } from '../components/cardCarousel';

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
    const [currentPageNewModels, setCurrentPageNewModels] = useState(1);
    const [currentPageHotPrices, setCurrentPageHotPrices] = useState(1);
    const selectedItemsPerPage = 4;

    const [total] = useState(phones.length);
    const firstNewItemIndex = currentPageNewModels * selectedItemsPerPage - selectedItemsPerPage;
    const lastNewItemIndex = (currentPageNewModels * selectedItemsPerPage) <= total
        ? (currentPageNewModels * selectedItemsPerPage)
        : (total);

    const firstHotItemIndex = currentPageHotPrices * selectedItemsPerPage - selectedItemsPerPage;
    const lastHotItemIndex = (currentPageHotPrices * selectedItemsPerPage) <= total
        ? (currentPageHotPrices * selectedItemsPerPage)
        : (total);

    const newModels = useMemo( () => {
        return  [...phones].sort((a, b) => b.year - a.year);
    },
    []
    );

    const visibleNewPhonesPerPage = newModels.slice(firstNewItemIndex, lastNewItemIndex);


    const hotPricesModels = useMemo(() => {
        return [...phones].sort((a, b) => (b.fullPrice - b.price) - (a.fullPrice - a.price));
    }, []);

    const visibleHotPhonesPerPage = hotPricesModels.slice(firstHotItemIndex, lastHotItemIndex);

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
                <CardCarousel
                    phones={visibleNewPhonesPerPage}
                    title={'Brand new models'}
                    setCurrentPage={setCurrentPageNewModels}
                    currentPage={currentPageNewModels}
                    itemsPerPage={selectedItemsPerPage}
                    dataCyID={1}
                />
                <ShopSection />
                <CardCarousel
                    phones={visibleHotPhonesPerPage}
                    title={'Hot prices'}
                    setCurrentPage={setCurrentPageHotPrices}
                    currentPage={currentPageHotPrices}
                    itemsPerPage={selectedItemsPerPage}
                    dataCyID={2}
                />
            </div>
            <Footer backToTopClick={backToTopClick} />
        </>
    );
};