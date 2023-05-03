import React, { Dispatch, SetStateAction, useState } from 'react';
import { PhoneList } from '../phoneList';
import { Phone } from '../../pages/HomePage';
import { PhoneListWithDiscount } from '../PhoneListWDiscount';

type CardCarouselProps = {
  title: string,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  phones: Phone[],
  currentPage: number,
  itemsPerPage: number,
  dataCyID: number
};

export const CardCarousel: React.FC<CardCarouselProps> = ({
    title,
    setCurrentPage,
    phones,
    currentPage,
    itemsPerPage,
    dataCyID,
}) => {
    const [total] = useState(phones.length);
    const isFirstPage = currentPage === 1;
    const lastPage = Math.ceil(total /itemsPerPage);
    const isLastPage = currentPage === lastPage;


    const handleFw = () => {
        setCurrentPage((current) => current + 1);
    };

    const handleRw = () => {
        setCurrentPage((current) => current - 1);
    };

    return (
        <div data-cy="card_carousel" id={`${dataCyID}`}>
            <div className="main_subtitle_container">
                <h2 className='main_subtitle'>{title}</h2>
                <div className='main_btns'>
                    <button
                        className="link_button"
                        data-cy="prevLink"
                        onClick={handleRw}
                        aria-disabled={isFirstPage}
                    >
                              «
                    </button>
                    <button
                        className="link_button"
                        data-cy="prevLink"
                        onClick={handleFw}
                        aria-disabled={isLastPage}
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