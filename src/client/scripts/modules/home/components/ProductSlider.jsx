import React from 'react';
import Slider from 'react-slick';
import ProductCard from 'modules/catalogue/components/ProductCard';

const ProductSlider = () => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: false
    };

    return(
        <div className="container">
            <div className="rowx">
                <Slider {...settings}>
                    <div className="col-sm-3">
                        <ProductCard product={{id: '123', title: 'The Title'}} />
                    </div>
                    <div className="col-sm-3">
                        <ProductCard product={{id: '123', title: 'The Title'}} />
                    </div>
                    <div className="col-sm-3">
                        <ProductCard product={{id: '123', title: 'The Title'}} />
                    </div>
                    <div className="col-sm-3">
                        <ProductCard product={{id: '123', title: 'The Title'}} />
                    </div>
                    <div className="col-sm-3">
                        <ProductCard product={{id: '123', title: 'The Title'}} />
                    </div>
                    <div className="col-sm-3">
                        <ProductCard product={{id: '123', title: 'The Title'}} />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default ProductSlider;
