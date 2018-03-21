import React, {Component} from 'react';
import {connect} from 'react-redux';
import CustomerInfoForm from 'modules/account/details/partials/CustomerInfoForm';


@connect((state) => {
    return {
        customer: state.authentication.customer
    };
})
export default class CustomerInfoFormContainer extends Component {

    change() {
        console.log('chnage');
    }

    submit(e) {
        e.preventDefault();
        console.log('submit');
    }

    renderForm() {
        if(this.props.customer) {
            console.log(this.props.customer);
            return <CustomerInfoForm customer={this.props.customer} submit={this.submit.bind(this)} change={this.change.bind(this)} />;
        }

        return null;
    }

    render() {
        return this.renderForm();
    }
}