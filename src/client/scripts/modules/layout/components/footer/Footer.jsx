import React from 'react';
import MenuGroup from 'modules/layout/components/footer/MenuGroup';
import SocialLinks from 'modules/layout/components/footer/SocialLinks';

const Footer = () => {
    const catalogueMenuItems = [
        {label: 'Boots', href: ''},
        {label: 'Training', href: ''},
        {label: 'Kits', href: ''},
        {label: 'Equipment', href: ''},
        {label: 'Teamwear', href: ''},
        {label: 'Collections', href: ''}
    ];

    const exploreMenuItems = [
        {label: 'About us', href: ''},
        {label: 'Shipping', href: ''},
        {label: 'Get in touch', href: ''},
        {label: 'T\'s &amp; C\'s', href: ''},
        {label: 'Privacy', href: ''},
        {label: 'Careers', href: ''}
    ];

    return (
        <footer className="g-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <MenuGroup title="Catalogue" items={catalogueMenuItems} />
                    </div>
                    <div className="col-md-3 offset-md-1">
                        <MenuGroup title="Explore" items={exploreMenuItems} />
                    </div>
                    <div className="col-md-3 offset-md-1">
                        <SocialLinks />
                    </div>
                </div>
                <div className="g-footer__copyright">
                    <small>&copy;agame sports 2017</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
