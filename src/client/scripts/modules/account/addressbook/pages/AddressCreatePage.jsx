import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountLayout from 'modules/account/layouts/AccountLayout';
import AddressForm from 'lib/forms/AddressForm';
import { createAddress } from 'modules/account/addressbook/addressbookActions';

class AddressCreatePage extends Component {

    handleSubmit = (values) => {
        this.props.createAddress(values, '/account/addressbook');
    }

    render() {
        return (
            <AccountLayout>
                <section className="t-delivery-address">
                    <h1>Create new address</h1>
                    <p>Please enter your new address in the form below and we'll save
                    it into your address book.</p>
                    <AddressForm onSubmit={this.handleSubmit} />
                </section>
            </AccountLayout>
        );
    }
};

export default connect(null, {createAddress})(AddressCreatePage);
