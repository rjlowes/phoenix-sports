import React from 'react';
import {Link} from 'react-router-dom';

const MiniBasketItem = ({product}) => (
    <div className="minibasket-item">
        <Link to={`/product/${product.id}`} className="minibasket-item__figure">
            <img
                src="https://images.nike.com/is/image/DotCom/PDP_HERO/803102_063_A_PREM/pro-warm-training-tights.jpg"
                alt=""
                width="70"
                className="minibasket-item__img "/>
        </Link>
        <div className="minibasket-item__content">
            <div className="minibasket-item__detail">
                <p className="h4">{product.title}</p>
                <span>abc123</span>
            </div>
            <div className="minibasket-item__price">
                <span className="h4">&pound;29.99</span>
            </div>
        </div>
    </div>
);

export default MiniBasketItem;
