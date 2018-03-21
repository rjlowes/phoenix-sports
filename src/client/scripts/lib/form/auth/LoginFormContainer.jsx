import React, {Component} from 'react';

import LoginForm from 'lib/form/auth/LoginForm';

import store from 'lib/redux/store';
import {login} from 'lib/redux/customer/loginActions';


export default class LoginFormContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {customer: {email: "", password: ""}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props.history);
        console.log(this.props);
    }

    handleChange(event) {
        // TODO use this https://github.com/kolodny/immutability-helper
        let customer = this.state.customer;
        customer[event.target.name] = event.target.value;
        this.setState({customer: customer});
    }

    handleSubmit(event) {
        event.preventDefault();
        // TODO consider storeApi.login which centralises all the dispatches
        store.dispatch(login(this.state.customer));

        // let headers = new Headers({'Content-Type': 'application/json'});
        // let request = new Request('/api/login', {
        //     method: 'POST',
        //     headers: headers,
        //     body: JSON.stringify(this.state.user),
        //     credentials: 'include'
        // });
        // console.log(request);
        // // this.props.parentSubmit();
    }

    render() {
        return (<LoginForm customer={this.state.customer} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />);
    }
};
