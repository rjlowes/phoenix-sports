import React, {Component} from 'react';
import GallerySlider from 'modules/home/components/GallerySlider';
import Carousel from 'components/carousel/Carousel';
import CarouselItem from 'components/carousel/CarouselItem';
import PromoCard from 'modules/home/components/PromoCard';
import ProductSlider from 'modules/home/components/ProductSlider';


export default class HomePage extends Component {
	render() {
		return (

			<div className="t-homepagex">
                {/* <div className="wrapper">
                    <div className="grid">
                        <div className="grid__col">one</div>
                        <div className="grid__col">two</div>
                    </div>
                </div> */}

				<GallerySlider />

				<div className="container">
					<section className="t-homepage__promo row">
						<div className="t-homepage__promo-item">
							<PromoCard
								url="http://pngimg.com/uploads/adidas/adidas_PNG8.png"
								mainText="Impossible is Nothing"
							 	subText="Get competetive with all of the latest Adidas gear." />
						</div>
						<div className="t-homepage__promo-item">
							<PromoCard
								url="http://pngimg.com/uploads/adidas/adidas_PNG8.png"
								mainText="Impossible is Nothing"
							 	subText="Get competetive with all of the latest Adidas gear." />
						</div>
					</section>
				</div>

				<ProductSlider />

			</div>
		);
	}
}
