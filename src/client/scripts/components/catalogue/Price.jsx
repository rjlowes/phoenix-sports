import React from 'react';

const Price = () => (
    <p itemScope itemType="http://schema.org/Offer" className="text-lead">
        <span itemProp="priceCurrency" content="GBP">£</span>
        <span className="price" itemProp="price">100.00</span>
    </p>
);

export default Price;
