import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAddressList} from 'modules/account/addressbook/addressbookActions';
import AccountLayout from 'modules/account/layouts/AccountLayout';
import AddressList from 'modules/account/addressbook/components/AddressList';

class AddressListPage extends Component {

    componentDidMount() {
        this.props.fetchAddresses();
    }

    render() {
        return (
            <AccountLayout>
                <div>
                    <Link to="/account/addressbook/new">new address</Link>
                    <div className="">
                        <AddressList addresses={this.props.addresses} />
                    </div>
                </div>
            </AccountLayout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        addresses: state.addressbook.addresses
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAddresses: () => dispatch(fetchAddressList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressListPage);
