import { Phone } from '../../pages/HomePage';
import { PhoneCard } from '../phoneCard/PhoneCard';
import { Row } from 'react-bootstrap';
import React from 'react';

type PhonesListProps = {
  phones: Phone[],
};

export const PhoneList: React.FC<PhonesListProps> = ({ phones }) => {
    return (
        <Row className="phone_list">
            {phones.map((phone) => (
                <PhoneCard
                    phone={phone}
                    key={phone.id}
                />
            ))}
        </Row>
    );
};