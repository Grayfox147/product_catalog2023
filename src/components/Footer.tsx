import * as React from 'react';
// import { Container, Row, Col} from 'react-bootstrap';
import footerLogo from '../Icons/logo__header_phone.svg';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='footer_container'>
          <div className='footer_logo_container'>
            <img
              src={footerLogo}
              alt="logo"
              className='footer_logo'
            />
          </div>
          <div className='f'>
            <div className='footer_subcontainer'>
              <a href="#github" className='footer_link'>GITHUB</a>
            </div>
            <div className='footer_subcontainer'>
                <a href="#contacts" className='footer_link'>CONTACTS</a>
            </div>
            <div className='footer_subcontainer'>
              <a href="#rigths" className='footer_link'>RIGTHS</a>
            </div>
          </div>
          <div>
            <a href="#backToTop" className='footer_Backlink'>Back to top</a>
          </div>
      </div>
    </footer>
   );
}

export default Footer;