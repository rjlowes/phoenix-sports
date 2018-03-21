import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

import LoginForm from 'modules/authentication/partials/LoginForm';

import store from 'lib/redux/store';
import {login} from 'lib/redux/authentication/authenticationActions';


// @connect()
class LoginFormContainer extends Component {

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
        return (<LoginForm customer={this.state.customer} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />);
    }
};

export default withRouter(connect((state) => {
    return {
        customer: state.authentication.customer
    };
})(LoginFormContainer))
