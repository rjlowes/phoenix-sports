import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAddress } from 'modules/account/addressbook/addressbookActions';
import AddressForm from 'lib/forms/AddressForm';


class AddressEditPage extends Component {

    componentDidMount() {
        if(!this.props.address) {
            const { addressId } = this.props.match.params;

            this.props.fetchAddress(addressId);
        }
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

const mapStateToProps = ({addressbook}, ownProps) => ({
    address: addressbook[ownProps.match.params.addressId]
});

export default connect(mapStateToProps, { fetchAddress })(AddressEditPage);
