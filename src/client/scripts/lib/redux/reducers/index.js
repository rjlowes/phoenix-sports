import {combineReducers} from 'redux';

// import customers from './customerReducers';
import authentication from 'lib/redux/authentication/authenticationReducers';
import authentication2 from '../customer/loginReducers';
import details from '../customer/customerReducers';
// import categories from './categoryReducers';

import addressBook from 'lib/redux/addressbook/addressBookReducers';
import customerAddresses from '../addressbook/fetchAddressListReducers';
import createAddressReducers from '../addressbook/createAddressReducers';


const ecomApp = combineReducers({
    addressBook,
    authentication
	// customer: combineReducers({
 //        authentication2,
 //        details
 //    })
});

export default {addressBook, authentication};
