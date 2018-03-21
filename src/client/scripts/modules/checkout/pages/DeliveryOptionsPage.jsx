import React, {Component} from 'react';
import {connect} from 'react-redux';
import CheckoutLayout from 'modules/checkout/components/CheckoutLayout';
// import AddressForm from 'lib/forms/AddressForm';
// import {createAddress} from 'modules/account/addressbook/addressbookActions';

class DeliveryOptionsPage extends Component {

    handleSubmit = (values) => {
        this.props.createAddress(values, '/checkout/delivery-options');
    }

    render() {
        return (
            <CheckoutLayout>
                <section className="t-delivery-address">
                    <h1>Delivery option</h1>
                    <p>Please enter the address to send your product. We'll make a note of it in your address book.
                     You'll be able to see and edit the information in your account.</p>

                </section>
            </CheckoutLayout>
        );
    }
}

export default connect(null)(DeliveryOptionsPage);
