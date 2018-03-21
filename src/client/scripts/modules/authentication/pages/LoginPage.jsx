import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import LoginForm from 'modules/authentication/components/LoginForm';

// import store from 'lib/redux/store';
import {login} from 'modules/authentication/authenticationActions';

// Redirect after login
// https://gist.github.com/verticalgrain/195468e69f2ac88f3d9573d285b09764

@connect((store) => {
    return {
        customer: store.authentication.customer
    };
})
export default class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customer: {
                email: "",
                password: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.customer) {
            this.props.history.push('/account');
        }
    }

    handleChange(event) {
        // TODO use this https://github.com/kolodny/immutability-helper
        let customer = this.state.customer;
        customer[event.target.name] = event.target.value;
        this.setState({customer: customer});
    }

    // TODO validate form
    handleSubmit(event) {
        event.preventDefault();
        let {dispatch} = this.props;
        dispatch(login(this.state.customer));
    }

    render() {
        return (
            <div className="t-login">
                <div className="t-login__primary-row">
                    <div className="t-login-main">
                        <div>
                            <h1>Sign in</h1>
                            <p><Link to="/register" className="logo">Create an account</Link> or sign in to continue.</p>
                        </div>
                        <LoginForm customer={this.state.customer} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    </div>
                    <div className="t-login-sidebar">
                        <p>Test content</p>
                    </div>
                </div>
            </div>
        );
    }
}
