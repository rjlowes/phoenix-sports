import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

// import customers from './customerReducers';
import basketReducer from 'modules/basket/basketReducer';
import authentication from 'modules/authentication/authenticationReducer';
import app from 'modules/App/appReducer';
import catalogue from 'modules/catalogue/catalogueReducer';
import addressbook from 'modules/account/addressbook/addressbookReducer';
// import authentication2 from '../customer/loginReducers';
// import details from '../customer/customerReducers';
// // import categories from './categoryReducers';

// import addressBook from 'lib/redux/addressbook/addressBookReducers';
// import customerAddresses from '../addressbook/fetchAddressListReducers';
// import createAddressReducers from '../addressbook/createAddressReducers';


// const reducers = combineReducers({
//     // addressBook,
//     authentication
//     // customer: combineReducers({
//  //        authentication2,
//  //        details
//  //    })
// });

export default {
    form: formReducer,
    basket: basketReducer,
    authentication,
    catalogue,
    addressbook,
    app
};
