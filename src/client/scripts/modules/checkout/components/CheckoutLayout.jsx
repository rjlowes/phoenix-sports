import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const CheckoutLayout = (props) => {

    return (
        <section className="t-checkout container">
            <div className="t-checkout__main row">
                <div className="col-sm-8">
                    {props.children}
                </div>
                <div className="col-sm-4">
                    summary abc
                </div>
            </div>
        </section>
    );
};

export default CheckoutLayout;
