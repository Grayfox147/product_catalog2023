import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineInbox } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
// import classNames from 'classnames';

type BurguerMenuProps = {
  handleOpen: () => void,
};

export const BurguerMenu: React.FC<BurguerMenuProps> = ({ handleOpen }) => {
    return (
        <div className='burguer_menu'>
            <div className='burguer_links'>
                <ul>
                    <NavLink
                        className='burguer_link'
                        to='/product_catalog2023'
                        onClick={handleOpen}
                    >
                      HOME
                    </NavLink>
                    <NavLink
                        className='burguer_link'
                        to='/phones'
                        onClick={handleOpen}
                    >
                      PHONES
                    </NavLink>
                    <NavLink
                        className='burguer_link'
                        to='/tablets'
                        onClick={handleOpen}
                    >
                      TABLETS
                    </NavLink>
                    <NavLink
                        className='burguer_link'
                        to='/accesories'
                        onClick={handleOpen}
                    >
                      ACCESSORIES
                    </NavLink>
                </ul>
            </div>
            <div className='burguer_btns'>
                <Link
                    className='burguer_btns-link'
                    to={'/favourites'}
                    onClick={handleOpen}
                >
                    <button>
                        <FiHeart color='#F1F2F9' size={10}/>
                    </button>
                </Link>
                <Link
                    className='burguer_btns-link'
                    to={'/shoppingCart'}
                    onClick={handleOpen}
                >
                    <button>
                        <AiOutlineInbox color='#F1F2F9' size={10}/>
                    </button>
                </Link>
            </div>
        </div>
    );
};