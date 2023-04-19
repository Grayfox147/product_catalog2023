import navbar_logo from '../../Icons/logo__header_phone.svg';
import React, { useState } from 'react';
import classNames from 'classnames';
import { BurguerMenu } from '../burguerMenu';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav
                className={classNames(
                    'navbar',
                    { '-isOpen': isOpen }
                )}
            >
                <div>
                    <img src={navbar_logo} alt="navbarLogo" className='navbar_logo'/>
                </div>
                <div className='toggle_container'>
                    <a
                        href="#"
                        className={classNames(
                            {'toggle_button': !isOpen},
                            {'toggle_button_close': isOpen}
                        )}
                        onClick={(event) => {
                            event.preventDefault();
                            setIsOpen((state) => !state);
                        }}
                    />
                </div>
                {isOpen && (
                    <BurguerMenu />
                )}
                <div className='navbar_links'>
                    <ul>
                        <li>
                            <a href="#home" className='navbar_link'>HOME</a>
                        </li>
                        <li>
                            <a href="#phones" className='navbar_link'>PHONES</a>
                        </li>
                        <li>
                            <a href="#tablets" className='navbar_link'>TABLETS</a>
                        </li>
                        <li>
                            <a href="#accesories" className='navbar_link'>ACCESSORIES</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
