import { Phone } from '../pages/HomePage';
import { PhoneCardWithdDiscount} from './PhoneCardWithDiscount'
import { Row } from 'react-bootstrap';

type PhonesListProps = {
  phones: Phone[],
};

export const PhoneListWithDiscount: React.FC<PhonesListProps> = ({ phones }) => {
  return (
    <Row lg={4} md={2} x-small={1} className="card_carousel">
      {phones.map((phone) => (
        <PhoneCardWithdDiscount
          phone={phone}
          key={phone.id}
        />
      ))}
    </Row>
  )
}