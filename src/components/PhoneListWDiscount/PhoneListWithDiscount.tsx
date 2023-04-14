import { Phone } from '../../pages/HomePage';
import { PhoneCardWithdDiscount} from '../PhoneCardW/PhoneCardWithDiscount';
import { Row } from 'react-bootstrap';
import React from 'react';

type PhonesListProps = {
  phones: Phone[],
};

export const PhoneListWithDiscount: React.FC<PhonesListProps> = ({ phones }) => {
	return (
		<Row lg={4} md={2} x-small={1} className="phone_list">
			{phones.map((phone) => (
				<PhoneCardWithdDiscount
					phone={phone}
					key={phone.id}
				/>
			))}
		</Row>
	);
};