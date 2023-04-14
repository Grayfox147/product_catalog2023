import { Phone } from "../../pages/HomePage";
import { PhoneCard } from "../PhoneCard/PhoneCard"
import { Row } from 'react-bootstrap';

type PhonesListProps = {
  phones: Phone[],
};

export const PhoneList: React.FC<PhonesListProps> = ({ phones }) => {
  return (
    <Row lg={4} md={2} x-small={1} className="phone_list">
      {phones.map((phone) => (
        <PhoneCard
          phone={phone}
          key={phone.id}
        />
      ))}
    </Row>
  )
}