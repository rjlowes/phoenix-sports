import React, {Component} from 'react';
import {connect} from 'react-redux';
import CustomerInfoFormContainer from 'modules/account/details/partials/CustomerInfoFormContainer';


@connect((store) => {
    return {
        customer: store.authentication.customer
    };
})
export default class CustomerInfoPage extends Component {

    
    componentWillReceiveProps(nextProps) {
        console.log('2) proppy');
    }

    componentDidMount() {
        if(!this.props.customer) {
            console.log('no customer details');

        }
    }

    render() {
        return (
            <div>
                <CustomerInfoFormContainer />
            </div>
        );
    }
}