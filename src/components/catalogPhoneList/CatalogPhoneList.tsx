import React from 'react';
import { Phone } from '../../pages/HomePage';
import { PhoneCard } from '../phoneCard/PhoneCard';
import { Row } from 'react-bootstrap';

type CatalogPhonesListProps = {
  phones: Phone[],
  setPhoneId?: (id: number) => void,
};

export const CatalogPhoneList:React.FC<CatalogPhonesListProps> = ({
    phones,
    setPhoneId,
}) => {
    return (
        <Row className="catalog_list">
            {phones.map((phone) => (
                <PhoneCard
                    phone={phone}
                    key={phone.id}
                    setPhoneId={setPhoneId}
                />
            ))}
        </Row>
    );
};