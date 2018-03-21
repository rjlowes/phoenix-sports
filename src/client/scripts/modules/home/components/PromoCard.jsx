import React from 'react';
import {Link} from 'react-router-dom';

const PromoCard = (props) => {
    return (
        <Link to="/" className="c-promo-card">
            <img src={props.url} style={{width:'100%'}} />
            <h2 className="c-promo-card__main-text">{props.mainText}</h2>
            <p className="c-promo-card__sub-text">{props.subText}</p>
            <button className="c-promo-card__btn btn">Learn more</button>
        </Link>
    );
};

export default PromoCard;
