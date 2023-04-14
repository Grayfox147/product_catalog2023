import { Header } from '../components/Header';
import { Carousel } from 'react-bootstrap';
import Iphone14 from '../img/Iphone14Pro_Home-Sm.jpg';
import Iphone142 from '../img/Iphone 14 Silver 128Gb.png';
import Footer from '../components/Footer/Footer';
import phones from '../api/phones.json';
import { PhoneList } from '../components/PhoneList/PhoneList';
import { useState } from 'react';
import IphoneGray from '../img/image 6.png';
import IphoneGray2 from '../img/image 5.png';
import IphoneGray3 from '../img/image 7.png';
import { PhoneListWithDiscount } from '../components/PhoneListWDiscount/PhoneListWithDiscount';
import React, { useRef } from 'react';

const newModels = [ ...phones ].sort((a, b) => b.year - a.year);
const hotPricesModels = [ ...phones ].sort((a, b) => (b.fullPrice - b.price) - (a.fullPrice - a.price));

export interface Phone {
  id: string,
  category: string,
  phoneId: string,
  itemId: string,
  name: string,
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  color: string,
  ram: string,
  year: number,
  image: string
}

export const HomePage: React.FC = () => {
	const [newModelsPhones] = useState(newModels.slice(0, 7));
	const [hotPricingModels] = useState(hotPricesModels.slice(0, 7));
	const backToTopRef = useRef<HTMLDivElement>(null);

	const handleFwButton = () => {
		// onClick I should show or alter the slice method.
	};

	const backToTopClick = () => {
		backToTopRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<h1 hidden>Product Catalog</h1>
			<Header />
			<div className='main' ref={backToTopRef}>
				<section data-cy="welcome and new models">
					<h1 className='main_title'>Welcome to Nice Gadgets store!</h1>
					<Carousel>
						<Carousel.Item interval={5000}>
							<img
								src={Iphone14}
								alt="Iphone14ProBeyond"
								className='d-block w-100' />
						</Carousel.Item>
						<Carousel.Item>
							<img
								src={Iphone142}
								alt="Iphone14ProBeyond"
								className='d-block w-100' />
						</Carousel.Item>
					</Carousel>
					<div className="main_subtitle_container">
						<h2 className='main_subtitle'>Brand new <br /> models</h2>
						<div>
							<button
								className="link_button"
								data-cy="prevLink"
								// onClick={() => {}}
							>
              «
							</button>
							<button
								className="link_button"
								data-cy="prevLink"
								onClick={handleFwButton}
							>
              »
							</button>
						</div>
					</div>
					<PhoneList phones={newModelsPhones} />
				</section>
				<section data-cy="shop and hot prices">
					<h2 className="shop_subtitle">Shop by category</h2>
					<div className="shop_box">
						<img
							src={IphoneGray}
							alt="grayphone"
							className="shop_image"
						/>
					</div>
					<h2 className="shop_subtitle2">Mobile phones</h2>
					<span className="shop_subtitle3">95 models</span>
					<div className="shop_box2">
						<img
							src={IphoneGray2}
							alt="grayphone"
							className="shop_image"
						/>
					</div>
					<h2 className="shop_subtitle2">Tablets</h2>
					<span className="shop_subtitle3">24 models</span>
					<div className="shop_box3">
						<img
							src={IphoneGray3}
							alt="grayphone"
							className="shop_image"
						/>
					</div>
					<div className="main_subtitle_container">
						<h2 className='main_subtitle'>Hot prices</h2>
						<div>
							<button
								className="link_button"
								data-cy="prevLink"
								// onClick={() => {}}
							>
              «
							</button>
							<button
								className="link_button"
								data-cy="prevLink"
								onClick={handleFwButton}
							>
              »
							</button>
						</div>
					</div>
					<PhoneListWithDiscount phones={hotPricingModels} />
				</section>
			</div>
			<Footer backToTopClick={backToTopClick} />
		</>
	);
};