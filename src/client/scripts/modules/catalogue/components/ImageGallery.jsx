import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

class ImageGallery extends Component {
    render() {
        const { src } = this.props;

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <Slider { ...settings }>
                    <div>
                    <img src={ src } alt="" className="img-responsive" />
                </div>
                <div>
                    <img src={ src.replace(/_1/, '_2') } alt="" className="img-responsive" />
                </div>
                </Slider>
            </div>
        );
    }
}

ImageGallery.propTypes = {
    src: PropTypes.string
};

const ImageGalleryX = () => (
    <div className="gallery rowx">
        <ul className="col-sm-2x">
            <li><img src="https://images.nike.com/is/image/DotCom/PDP_HERO_M/803102_063_A_PREM/pro-warm-training-tights.jpg" width="80" /></li>
            <li><img src="https://images.nike.com/is/image/DotCom/PDP_HERO_M/803102_063_A_PREM/pro-warm-training-tights.jpg" width="80" /></li>
            <li><img src="https://images.nike.com/is/image/DotCom/PDP_HERO_M/803102_063_A_PREM/pro-warm-training-tights.jpg" width="80" /></li>
            <li><img src="https://images.nike.com/is/image/DotCom/PDP_HERO_M/803102_063_A_PREM/pro-warm-training-tights.jpg" width="80" /></li>
            <li><img src="https://images.nike.com/is/image/DotCom/PDP_HERO_M/803102_063_A_PREM/pro-warm-training-tights.jpg" width="80" /></li>
            <li><img src="https://images.nike.com/is/image/DotCom/PDP_HERO_M/803102_063_A_PREM/pro-warm-training-tights.jpg" width="80" /></li>
        </ul>
        <div className="col-sm-10x">
            <img src="https://images.nike.com/is/image/DotCom/PDP_HERO_M/803102_063_A_PREM/pro-warm-training-tights.jpg" itemProp="image" className="img-responsive" />
        </div>
    </div>
);

export default ImageGallery;
