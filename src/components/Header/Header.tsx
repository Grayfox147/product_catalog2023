import navbar_logo from '../../Icons/logo__header_phone.svg';
import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineInbox } from 'react-icons/ai';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
type HeaderProps = {
  handleToggleButton: () => void,
  isOpen: boolean
};

export const Header: React.FC<HeaderProps> = ({
    handleToggleButton,
    isOpen,
}) => {
    return (
        <nav
            className='navbar'
            data-cy='navbar'
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
                        handleToggleButton();
                    }}
                />
            </div>
            <div className='navbar_links'>
                <ul>
                    <NavLink
                        className={({ isActive }) => classNames(
                            'navbar_link',
                            { 'navbar_link-active': isActive }
                        )}
                        to='/product_catalog2023'
                    >
                      HOME
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => classNames(
                            'navbar_link',
                            { 'navbar_link-active': isActive }
                        )}
                        to='/phones'
                    >
                      PHONES
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => classNames(
                            'navbar_link',
                            { 'navbar_link-active': isActive }
                        )}
                        to='/tablets'
                    >
                      TABLETS
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => classNames(
                            'navbar_link',
                            { 'navbar_link-active': isActive }
                        )}
                        to='/accesories'
                    >
                      ACCESSORIES
                    </NavLink>
                </ul>
            </div>
            <div className='navbar_btns'>
                <Link to={'/favourites'}>
                    <button>
                        <FiHeart color='#F1F2F9' size={15}/>
                    </button>
                </Link>
                <Link to={'/shoppingCart'}>
                    <button>
                        <AiOutlineInbox color='#F1F2F9' size={15}/>
                    </button>
                </Link>
            </div>
        </nav>
    );
};
