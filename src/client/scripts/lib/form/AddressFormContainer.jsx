import React, {Component} from 'react';

import AddressForm from 'lib/form/AddressForm';

import store from 'lib/redux/store';
import {connect} from 'react-redux';
import {createAddress} from 'lib/redux/actions/addressActions';

import * as addressBookActionCreators from 'lib/redux/addressbook/addressBookActions';

@connect()
export default class AddressFormContainer extends Component {

    constructor(props) {
        super(props);
        // TODO create a model
        this.state = {
            title: '', 
            firstname: '', 
            lastname: '', 
            address1: '', 
            address2: '', 
            address3: '',
            townCity: '',
            county: '',
            postcode: '',
            country: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        let {dispatch} = this.props;
        // testing async store action
        let address = {
            title: 'Mr',
            firstname: 'John',
            lastname: 'Smith',
            telephone: '05564333333',
            address1: 'Add 1',
            townCity: 'High Wycombe',
            county: 'Bucks',
            postcode: 'TE456ST',
            country: 'United Kingdom'
        }
    }

    

    handleChange(event) {
        // TODO use this https://github.com/kolodny/immutability-helper
        let address = this.state;
        address[event.target.name] = event.target.value;
        this.setState(address);
    }

    submit(event) {
        event.preventDefault();
        let {dispatch} = this.props;
        // TODO validate
        dispatch(addressBookActionCreators.createAddress(this.state))
    }

    render() {

        return (<AddressForm address={this.props.address} submit={this.submit} handleChange={this.handleChange} />)
    }
}
