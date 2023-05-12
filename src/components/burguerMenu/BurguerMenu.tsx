import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineInbox } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import navbar_logo from '../../Icons/logo__header_phone.svg';

export const BurguerMenu: React.FC = () => {
    return (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
            <nav
                className='navbar'
                data-cy='navbar'
            >
                <div>
                    <img src={navbar_logo} alt="navbarLogo" className='navbar_logo'/>
                </div>
                <div className='toggle_container'>
                    <Link
                        to='/product_catalog2023'
                        className='toggle_button_close'
                    />
                </div>
            </nav>
            <div className='burguer_menu'>
                <div className='burguer_links'>
                    <ul>
                        <NavLink
                            className='burguer_link'
                            to='/product_catalog2023'
                        >
                      HOME
                        </NavLink>
                        <NavLink
                            className='burguer_link'
                            to='/phones'
                        >
                      PHONES
                        </NavLink>
                        <NavLink
                            className='burguer_link'
                            to='/tablets'
                        >
                      TABLETS
                        </NavLink>
                        <NavLink
                            className='burguer_link'
                            to='/accesories'
                        >
                      ACCESSORIES
                        </NavLink>
                    </ul>
                </div>
                <div className='burguer_btns'>
                    <Link
                        className='burguer_btns-link'
                        to={'/favourites'}
                    >
                        <button>
                            <FiHeart color='#F1F2F9' size={10}/>
                        </button>
                    </Link>
                    <Link
                        className='burguer_btns-link'
                        to={'/shoppingCart'}
                    >
                        <button>
                            <AiOutlineInbox color='#F1F2F9' size={10}/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};