import React from 'react';
import IphoneGray from '../../img/image 6.png';
import IphoneGray2 from '../../img/image 5.png';
import IphoneGray3 from '../../img/image 7.png';

export const ShopSection: React.FC = () => {
    return (
        <section className='shop' data-cy="shop-section">
            <h2 className="shop_main_subtitle" style={{ marginBottom: '24px'  }}>Shop by category</h2>
            <div className='wrapper'>
                <div
                    data-cy="shop and hot prices"
                    className='shop_container'
                >
                    <div className='shop_box_container'>
                        <div className="shop_box">
                            <img
                                src={IphoneGray}
                                alt="grayphone"
                                className="shop_image"
                            />
                        </div>
                        <h2 className="shop_title">Mobile phones</h2>
                        <p className="shop_subtitle">95 models</p>
                    </div>
                    <div className='shop_box_container'>
                        <div className="shop_box2">
                            <img
                                src={IphoneGray2}
                                alt="grayphone"
                                className="shop_image"
                            />
                        </div>
                        <h2 className="shop_title">Tablets</h2>
                        <p className="shop_subtitle">24 models</p>
                    </div>
                    <div className='shop_box_container'>
                        <div className="shop_box3">
                            <img
                                src={IphoneGray3}
                                alt="grayphone"
                                className="shop_image"
                            />
                        </div>
                        <h2 className="shop_title">Accesories</h2>
                        <p className="shop_subtitle">100 models</p>
                    </div>
                </div>
            </div>
        </section>
    );
};