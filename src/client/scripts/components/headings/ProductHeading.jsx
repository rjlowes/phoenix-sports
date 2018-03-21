import React from 'react';

const ProductHeading = ({brand, title}) => (
    <h1 className="product-heading">
        <span itemProp="brand" className="product-heading__brand">{brand}</span>&nbsp;
        <span itemProp="name" className="product-heading__title">{title}</span>
    </h1>
);

export default ProductHeading;
