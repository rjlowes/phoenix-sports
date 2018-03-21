import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const ProductCard = (props) => {
    let product = props.product;



    return (
        <article className="c-thumbnail" itemScope itemType="http://schema.org/Product">
            <Link to={`/product/${product._id}`} itemProp="url" className="c-thumbnail__img">
                <img src="https://images.nike.com/is/image/DotCom/PDP_HERO/803102_063_A_PREM/pro-warm-training-tights.jpg" className="img-responsive" />
            </Link>
            <div className="c-thumbnail__content">
                <h2 className="type-clear-margin h4">
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                </h2>
                <p className="offer text-small" itemScope itemType="http://schema.org/Offer">
                    <span className="price" itemProp="price">&pound;100.00</span>
                </p>
            </div>
        </article>
    );
};

export default ProductCard;
