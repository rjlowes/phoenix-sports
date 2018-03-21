import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import AddressForm from 'lib/forms/AddressForm';

import { fetchAddressList } from 'lib/redux/addressbook/addressBookActions';

class AddressEditPage extends Component {

    componentDidMount() {
        // TODO If address is empty then grab the list
        let { fetchAddressList } = this.props;

        fetchAddressList();
    }

    handleSubmit = (values) => {
        this.props.createAddress(values, '/account/addressbook');
    }


    render() {
        const { address } = this.props;

        return (
            <section className="container">
                <Link to="/account/addressbook">back to list</Link>
                {this.props.address &&
                    <AddressForm address={ address } onSubmit={ this.handleSubmit } />}
            </section>
        );
    }
}

const mapStateToProps = (state, props) => {

    const { addressId } = props.match.params;
    const { addresses } = state.addressbook;
    console.log('a', addresses);
    console.log(_.find(addresses, {'_id': addressId}));


    return {
        addresses: state.addressbook.addresses,
        address: _.find(state.addressbook.addresses, {'_id': addressId})
    }
};

export default connect(mapStateToProps, { fetchAddressList })(AddressEditPage);
