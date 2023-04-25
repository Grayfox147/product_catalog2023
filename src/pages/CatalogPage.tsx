import React, { useMemo, useRef, useState } from 'react';
import { Header } from '../components/header';
import phones from '../api/phones.json';
import { BurguerMenu } from '../components/burguerMenu';
import Footer from '../components/footer/Footer';
import { NavLink } from 'react-router-dom';
import arrowRigth from '../Icons/Chevron (Arrow Right).svg';
import { Phone } from './HomePage';
import { CatalogPhoneList } from '../components/catalogPhoneList';
import { getNumbers } from '../utils/utils';
import { Pagination } from '../components/pagination';

export const CatalogPage: React.FC = () => {
    const backToTopRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [sortBy, setSortBy] = useState('Newest');
    const [itemsPerPage, setItemsPerPage] = useState('16');
    const [currentPage, setCurrentPage] = useState(1);
    const selectedItemsPerPage = Number(itemsPerPage);

    const numberOfPages = Math.ceil(phones.length / selectedItemsPerPage);
    const pages = getNumbers(1, numberOfPages);
    const [total] = useState(phones.length);
    const firstItemIndex = currentPage * selectedItemsPerPage - selectedItemsPerPage;
    const lastItemIndex = (currentPage * selectedItemsPerPage) <= total
        ? (currentPage * +itemsPerPage)
        : (total);

    const backToTopClick = () => {
        backToTopRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleToggleButton = () => {
        setIsOpen((state) => !state);
    };

    const sortPhones = (): Phone[] => {
        const phonesToBeSorted = [...phones];

        switch(sortBy) {
        case 'Newest':
            return phonesToBeSorted.sort((a, b) => (b.year - a.year));
        case 'Price':
            return phonesToBeSorted.sort((a, b) => a.price - b.price);
        case 'Name':
            return phonesToBeSorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'All':
        default:
            return [...phones];
        }
    };

    const visibleSortedPhones = useMemo(() => {
        return sortPhones();
    }, [sortBy]);

    const visiblePhonesPerPage = visibleSortedPhones.slice(firstItemIndex, lastItemIndex);

    return (
        <>
            <h1 hidden>Product catalog</h1>
            <Header handleToggleButton={handleToggleButton} isOpen={isOpen} />
            {isOpen && (
                <BurguerMenu handleOpen={handleToggleButton}/>
            )}
            <div className='main' ref={backToTopRef} data-cy="catalog-phones">
                <div className="tabs_path">
                    <NavLink
                        className='homeIcon'
                        to='/product_catalog2023'
                    />
                    <img src={arrowRigth} alt="Next-Arrow" />
                    <span className='tabs_text'>Phones</span>
                </div>
                <h1 className='catalog_title'>Mobile Phones</h1>
                <p className='catalog_subtitle'>95 models</p>
                <div className='catalog_select-container'>
                    <div className='catalog_select'>
                        <p className='tabs_text'>Sort by</p>
                        <select
                            name="sortBy"
                            id="sortBy"
                            data-cy="sortBySelector"
                            className='select_panel'
                            value={sortBy}
                            onChange={(event) => {
                                setSortBy(event.target.value);
                            }}
                        >
                            <option value="Newest">Newest</option>
                            <option value="Price">Price</option>
                            <option value="Name">Name</option>
                            <option value="All">All</option>
                        </select>
                    </div>
                    <div>
                        <p className='tabs_text'>Items per page</p>
                        <select
                            name="perPage"
                            id="perPage"
                            data-cy="perPageSelector"
                            className='select_panel'
                            value={itemsPerPage}
                            onChange={(event) => {
                                setItemsPerPage(event.target.value);
                            }}
                        >
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value="16">16</option>
                            <option value="All">All</option>
                        </select>
                    </div>
                </div>
                <CatalogPhoneList
                    phones={visiblePhonesPerPage}
                />
                <Pagination
                    itemsPerPage={selectedItemsPerPage}
                    total={total}
                    currentPage={currentPage}
                    pages={pages}
                    onPageChange={(value:number) => setCurrentPage(value)}
                />
            </div>
            <Footer backToTopClick={backToTopClick} />
        </>
    );
};