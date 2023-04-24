import * as React from 'react';
// import { Container, Row, Col} from 'react-bootstrap';
import footerLogo from '../../Icons/logo__header_phone.svg';


type FooterProps = {
  backToTopClick: () => void,
};

const Footer: React.FC<FooterProps> = ({ backToTopClick }) => {
    return (
        <footer>
            <div className='footer_container'>
                <div className='footer_logo_container' onClick={backToTopClick}>
                    <img
                        src={footerLogo}
                        alt="logo"
                        className='footer_logo'
                    />
                </div>
                <div className='footer_links'>
                    <div className='footer_subcontainer'>
                        <a href="/" className='footer_link'>GITHUB</a>
                    </div>
                    <div className='footer_subcontainer'>
                        <a href="/" className='footer_link'>CONTACTS</a>
                    </div>
                    <div className='footer_subcontainer'>
                        <a href="/" className='footer_link'>RIGTHS</a>
                    </div>
                </div>
                <div className='footer_backlink_container'>
                    <a
                        href="#"
                        className='footer_backlink'
                        onClick={backToTopClick}
                    >
                      Back to top
                    </a>
                    <button
                        className='footer_backlink_button'
                        onClick={backToTopClick}
                    >
              ^
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;