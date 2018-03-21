import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

@connect(store => {
    return {
        isAuthenticated: store.authentication.customer
    };
})
export default class Toolbar extends Component {
    render() {
        return (
            <div className="g-toolbar">
                <ul className="list-action">
                    {!this.props.isAuthenticated &&
                        <li className="list-action__item"><Link className="list-action__link" to="/login">Login</Link></li>}
                    {!this.props.isAuthenticated &&
                        <li className="list-action__item"><Link className="list-action__link" to="/register">Register</Link></li>}
                    {this.props.isAuthenticated &&
                        <li className="list-action__item"><Link className="list-action__link" to="/login">My Account</Link></li>}
                    {this.props.isAuthenticated &&
                        <li className="list-action__item"><Link className="list-action__link" to="/login">Logout</Link></li>}
                    <li className="list-action__item"><Link className="list-action__link" to="/login"><img src="/svg/shopping-basket.svg" /></Link></li>
                </ul>
            </div>
        );
    }
}
