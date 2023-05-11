import React, { useEffect, useRef, useState } from 'react';
import { PhoneList } from '../phoneList';
import { Phone } from '../../types/Phone';
import { PhoneListWithDiscount } from '../PhoneListWDiscount';

const gapSize = 16;
const mobileWidth = 212;
const tabletWidth = 237;
const desktopWidth = 272;

type CardCarouselProps = {
  title: string,
  phones: Phone[],
  dataCyID: number
};

export const CardCarousel: React.FC<CardCarouselProps> = ({
    title,
    phones,
    dataCyID,
}) => {
    const  [currentPage, setCurrentPage] = useState(0);
    const [cardWidth, setCardWidth] = useState(mobileWidth);
    const [step, setStep] = useState(1);

    const productWidth = (phones.length * cardWidth) + ((phones.length - 1) * gapSize);

    const productCardsRef = useRef<HTMLDivElement>(null);
    const refWidth = productCardsRef.current?.clientWidth ?? 0;
    const maxPage = productWidth - refWidth;


    const handleFw = () => {
        setCurrentPage(Math.min(currentPage + step * (cardWidth - gapSize), maxPage));
    };

    const handleRw = () => {
        setCurrentPage(Math.max(currentPage - step * (cardWidth - gapSize), 0));
    };

    useEffect(() => {
        if (productCardsRef.current) {
            productCardsRef.current.style.transform = `translateX(-${currentPage}.px)`;
        }
    }, [currentPage]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setCardWidth(desktopWidth);
                setStep(4);
            }

            if (window.innerWidth < 1200) {
                setCardWidth(tabletWidth);
                setStep(2);
            }

            if (window.innerWidth < 640) {
                setCardWidth(mobileWidth);
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
            {dataCyID === 1
                ? (
                    <PhoneList phones={phones} />
                )
                : (
                    <PhoneListWithDiscount phones={phones} />
                )}
        </div>
    );
};