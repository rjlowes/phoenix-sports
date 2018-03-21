import React, {Component} from 'react';

import {connect} from 'react-redux';

import AddressList from 'modules/account/addressbook/components/AddressList';
// import * as addressBookActions from 'lib/redux/addressbook/addressBookActions';


@connect(store => {
    return {addresses: store.addressBook.addresses}
})
export default class AddressListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {addresses: []};
    }

    componentDidMount() {
        // let {dispatch} = this.props;
        // dispatch(addressBookActions.fetchAddressList());
    }

    render() {
        return (
            <h1>HTekjlkfj</h1>
        )
    }
}

// <AddressList addresses={this.props.addresses} />

const mapStateToProps = state => {
    return {
        addresses: state.addressbook.addresses
    };
};

export default connect(mapStateToProps)(AddressListContainer);
