import React from 'react';

const CarouselItem = ({active, mainImageUri}) => {
    return (
        <div className={`c-carousel__item ${active ? 'c-carousel__item--active' : ''}`} style={{backgroundColor: '#000000'}}>
            <img
                src={mainImageUri}
                className="c-carousel__item-img" />
        </div>
    );
}

export default CarouselItem;
