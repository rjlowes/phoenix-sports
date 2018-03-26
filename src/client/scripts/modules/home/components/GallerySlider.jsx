import React from 'react';
import Slider from 'react-slick';

const GallerySlider = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false
    };

    return(
        <div className="rowx gallery-slider">
            <Slider {...settings}>
                <div style={{backgroundColor: '#000000'}}>
                    <img
                        style={{margin: '0 auto'}}
                        src="/images/content/home/carousel/dudes.jpg"
                        className="c-carousel__item-imgxxxxx" style={{width: '100%'}} />
                </div>
                <div style={{backgroundColor: '#e6e6e6'}}>
                    <img
                        style={{margin: '0 auto'}}
                        src="/images/content/home/carousel/adidas-white.jpg"
                        className="c-carousel__item-imgxxxxx" style={{width: '100%'}} />
                </div>
                <div style={{backgroundColor: '#202126'}}>
                    <img
                        style={{margin: '0 auto'}}
                        src="/images/content/home/carousel/trainer.jpg"
                        className="c-carousel__item-imgxxxxx" style={{width: '100%'}} />
                </div>
            </Slider>
        </div>
    );
};

export default GallerySlider;
