import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineInbox } from 'react-icons/ai';

export const BurguerMenu: React.FC = () => {
    return (
        <div className='burguer_menu'>
            <div className='burguer_links'>
                <ul>
                    <li>
                        <a href="#home">HOME</a>
                    </li>
                    <li>
                        <a href="#phones">PHONES</a>
                    </li>
                    <li>
                        <a href="#tablets">TABLETS</a>
                    </li>
                    <li>
                        <a href="#accesories">ACCESSORIES</a>
                    </li>
                </ul>
            </div>
            <div className='burguer_btns'>
                <button>
                    <FiHeart color='#F1F2F9' size={10}/>
                </button>
                <button>
                    <AiOutlineInbox color='#F1F2F9' size={10}/>
                </button>
            </div>
        </div>
    );
};