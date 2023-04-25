import React from 'react';
import { Phone } from '../../pages/HomePage';
import { PhoneCard } from '../phoneCard/PhoneCard';
import { Row } from 'react-bootstrap';

type CatalogPhonesListProps = {
  phones: Phone[],
};

export const CatalogPhoneList:React.FC<CatalogPhonesListProps> = ({
    phones,
}) => {
    return (
        <Row className="catalog_list">
            {phones.map((phone) => (
                <PhoneCard
                    phone={phone}
                    key={phone.id}
                />
            ))}
        </Row>
    );
};