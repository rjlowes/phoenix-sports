import React, {Component} from 'react';


const PostalAddress = (props) => {

    const {
        name,
        address1,
        address2,
        address3,
        townCity,
        county,
        country,
        postcode,
        telephone
    } = props.address;

    return (
        <div itemScope itemType="http://schema.org/Person" className="type-sml">
            <span className="strong" itemProp="name">{name}</span>

            <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <span itemProp="streetAddress">
                    {address1}<br />
                    {address2}<br />
                    {address3}
                </span>
                <span itemProp="addressLocality">{townCity}</span>,
                <span itemProp="addressRegion">{county}</span>
                <span itemProp="addressCountry">{country}</span><br />
                <span itemProp="postalCode">{postcode}</span><br />
            </div>
            <span itemProp="telephone">{telephone}</span>
        </div>
    );
};

export default PostalAddress;
