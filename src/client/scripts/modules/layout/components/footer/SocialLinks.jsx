import React from 'react';

const SocialLinks = () => (
    <div className="list-group-menu">
        <h4 className="list-group-menu__heading">Connect</h4>
        <ul className="list-icon">
            <li className="list-icon__item">
                <a href="" className="list-icon__item-link">
                    <img src="svg/twitter.svg" alt="Connect with us on Twitter" className="list-icon__item-img" />
                </a>
            </li>
            <li className="list-icon__item">
                <a href="" className="list-icon__item-link">
                    <img src="svg/facebook.svg" alt="Connect with us on Facebook" className="list-icon__item-img" />
                </a>
            </li>
            <li className="list-icon__item">
                <a href="" className="list-icon__item-link">
                    <img src="svg/youtube.svg" alt="Connect with us on YouTube" className="list-icon__item-img" />
                </a>
            </li>
            <li className="list-icon__item">
                <a href="" className="list-icon__item-link">
                    <img src="svg/instagram.svg" alt="Connect with us on Instagram" className="list-icon__item-img" />
                </a>
            </li>
        </ul>
    </div>
);

export default SocialLinks;
