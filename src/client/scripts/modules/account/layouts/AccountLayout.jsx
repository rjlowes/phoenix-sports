import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const AccountLayout = (props) => {
    return (
        <section className="t-account">
            <div className="t-account__row">
                <nav className="t-account__sidebar">
                    <h2 className="text-small">What can we do for you?</h2>
                    <ul>
                        <li><Link to="/account/addressbook">Address book</Link></li>
                        <li><Link to="/account/info">Your details</Link></li>
                        <li><a href="">Your email</a></li>
                        <li><a href="">Your password</a></li>
                        <li><a href="">My orders</a></li>
                        <li><a href="">My Subscriptions</a></li>
                    </ul>
                </nav>
                <div className="t-account__main">
                    {props.children}
                </div>
            </div>
        </section>
    );
};

export default AccountLayout;
