import React from 'react';
import phones from '../../img/Phones-img1.jpg';
import tablets from '../../img/tablets-img2.jpg';
import accesories from '../../img/Accesories-img3.jpg';

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
                        <img
                            src={phones}
                            alt="grayphone"
                            className="shop_image"
                        />

                        <h2 className="shop_title">Mobile phones</h2>
                        <p className="shop_subtitle">95 models</p>
                    </div>
                    <div className='shop_box_container'>
                        <img
                            src={tablets}
                            alt="grayphone"
                            className="shop_image"
                        />

                        <h2 className="shop_title">Tablets</h2>
                        <p className="shop_subtitle">24 models</p>
                    </div>
                    <div className='shop_box_container'>
                        <img
                            src={accesories}
                            alt="grayphone"
                            className="shop_image"
                        />
                        <h2 className="shop_title">Accesories</h2>
                        <p className="shop_subtitle">100 models</p>
                    </div>
                </div>
            </div>
        </section>
    );
};