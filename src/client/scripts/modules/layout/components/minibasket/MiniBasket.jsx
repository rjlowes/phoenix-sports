import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import MiniBasketItem from 'modules/layout/components/minibasket/MiniBasketItem';


const MiniBasket = ({basketItems}) => (
    <div>
        <ul className="minibasket-list">
            {basketItems.map((basketItem, idx) => {
                return (
                    <li key={basketItem.variant._id} className="minibasket-list__item">
                        <MiniBasketItem product={basketItem.variant} />
                    </li>
                );
            })}
        </ul>
        <div className="minibasket__footer">
            <dl>
                <dt>Sub total</dt><dd>&pound;24.99</dd>
                <dt>Estimated delivery</dt><dd>Free</dd>
                <dt>Total</dt><dd>&pound;24.99</dd>
            </dl>
            <Link to="/basket" className="btn btn--block btn--md">Secure Checkout</Link>
        </div>
    </div>
);

const mapStateToProps = state => {
    return {
        items: state.basket.items
    }
};

export default connect(mapStateToProps)(MiniBasket);
