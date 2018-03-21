import React, {Component} from 'react';
import ProductHeading from 'components/headings/ProductHeading';
import Price from 'components/catalogue/Price';

const ProductDetails = ({product}) => {
    if(!product) {
        return null;
    }

    const {brand, title, description} = product;

    return (
        <div className="t-prod__info">
            <ProductHeading brand={brand} title={title} />
            <p itemProp="description" className="text-lead">{description}</p>
            <Price />
        </div>
    );
};

export default ProductDetails;
