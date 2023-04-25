import React from 'react';
import emoji from '../../Icons/image 15.png';

export const BannerImage: React.FC = () => {
    return (
        <div className='banner'>
            <div className='banner_container'>
                <h1 className='banner_title'>
                  Now available <br /> in our stores!
                    <img src={emoji} alt="Iphone14" />
                </h1>
                <p className='banner_sub-title'>Be the first!</p>
                <button
                    className='banner_btn'
                >
                    <a href="/phones">ORDER NOW</a>
                </button>
            </div>
        </div>
    );
};