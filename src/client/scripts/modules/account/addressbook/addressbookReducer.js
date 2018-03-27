import _ from 'lodash';
import {
    FETCH_ADDRESS_LIST_SUCCESS,
    FETCH_ADDRESS_SUCCESS
} from 'modules/account/addressbook/addressbookActions';


const authenticationReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_ADDRESS_LIST_SUCCESS:
            return _.mapKeys(action.payload, '_id');
        case FETCH_ADDRESS_SUCCESS:
            return { ...state, [action.payload._id]: action.payload };
        default:
            return state;
    }
};

export default authenticationReducer;
