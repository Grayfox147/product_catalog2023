import React, { useEffect, useRef, useState } from 'react';
import phones from '../../api/phones.json';
import { PhoneCard } from '../phoneCard';
import { Row } from 'react-bootstrap';


// const mobileWidth = 212;
// const tabletWidth = 237;
// const desktopWidth = 272;

type CardCarouselProps = {
  title: string,
  dataCyID: number,
};

export const CardCarousel: React.FC<CardCarouselProps> = ({
    title,
    dataCyID,
}) => {
    const  [currentPage, setCurrentPage] = useState(0);
    const [step, setStep] = useState(1);

    const sortedPhones = [...phones].sort((a, b) => {
        switch(dataCyID) {
        case 1:
            return b.year - a.year;
        case 2:
            return (b.fullPrice - b.price) - (a.fullPrice - a.price);
        default :
            return a.name.localeCompare(b.name);
        }
    });

    const productCardsRef = useRef<HTMLTableRowElement>(null);
    const productCardRef = useRef<HTMLTableRowElement>(null);

    const containerWidth = productCardsRef.current?.clientWidth ?? 0;
    const cardWidth = productCardRef.current?.clientWidth ?? 0;

    const gapSize = 16;

    const productWidth = (sortedPhones.length * cardWidth) + ((sortedPhones.length - 1) * gapSize);

    const maxPage = productWidth - containerWidth;




    const handleFw = () => {
        setCurrentPage(
            Math.min(currentPage + step * (cardWidth + gapSize), maxPage)
        );
    };

    const handleRw = () => {
        setCurrentPage(
            Math.max(currentPage - step * (cardWidth - gapSize), 0)
        );
    };

    useEffect(() => {
        if (productCardsRef.current) {
            productCardsRef.current.style.transform = `translateX(-${currentPage}px)`;
        }
    }, [currentPage]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setStep(4);
            }

            if (window.innerWidth < 1200) {
                setStep(2);
            }

            if (window.innerWidth < 640) {
                setStep(1);
            }

            setCurrentPage(0);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);

    return (
        <div data-cy="card_carousel" id={`${dataCyID}`}>
            <div className="cardCarousel_container">
                <h2 className='cardCarousel_title'>{title}</h2>
                <div className='cardCarousel_btns'>
                    <button
                        className="link_button"
                        data-cy="prevLink"
                        onClick={handleRw}
                        disabled={currentPage === 0}
                    >
                              «
                    </button>
                    <button
                        className="link_button"
                        data-cy="prevLink"
                        onClick={handleFw}
                        disabled={currentPage === maxPage}
                    >
                              »
                    </button>
                </div>
            </div>
            <Row className="phone_list" ref={productCardsRef}>
                {sortedPhones.map((phone) => (
                    <PhoneCard
                        phone={phone}
                        key={phone.id}
                        dataCyID={dataCyID}
                    />
                ))}
            </Row>
        </div>
    );
};