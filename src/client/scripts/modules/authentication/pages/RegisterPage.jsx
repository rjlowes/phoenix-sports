import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import RegisterForm from 'lib/form/auth/RegisterForm';

// TODO look to create a service or set of services!
import store from 'lib/redux/store';
import {registerCustomer, customerTest} from 'lib/redux/actions/customerActions';


export default class RegisterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {customer: {email: null, password: null, title: null, firstname: null, lastname: null}};
        this.submitCustomer = this.submitCustomer.bind(this);
    }

    componentDidMount() {
        store.dispatch(customerTest());
    }

    submitCustomer() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let request = new Request('/api/register', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(this.state.customer)
        });

        fetch(request)
            .then((response) => response.json())
            .then(data => {
                store.dispatch(registerCustomer(data.customer));
                this.props.history.push('/account/dashboard');
            }).catch(err => {
                console.log('err ', err);
            })
    }

    render() {
        return (
            <div className="container">
                <RegisterForm customer={this.state.customer} submitCustomer={this.submitCustomer} />
            </div>
        );
    }
}