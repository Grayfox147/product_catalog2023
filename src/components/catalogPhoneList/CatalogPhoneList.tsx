import React from 'react';
import { Phone } from '../../types/Phone';
import { PhoneCard } from '../phoneCard/PhoneCard';

type CatalogPhonesListProps = {
  phones: Phone[],
};

export const CatalogPhoneList:React.FC<CatalogPhonesListProps> = ({
    phones,
}) => {
    return (
        <div className="catalog_list">
            {phones.map((phone) => (
                <PhoneCard
                    phone={phone}
                    key={phone.id}
                    dataCyID={2}
                />
            ))}
        </div>
    );
};