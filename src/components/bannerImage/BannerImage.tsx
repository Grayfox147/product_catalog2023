import React from 'react';
import Iphone14 from '../../img/Iphone14Pro_Home-Sm.jpg';
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
                <button className='banner_btn'>ORDER NOW</button>
            </div>
            <img src={Iphone14} alt="Iphone14" />
        </div>
    );
};