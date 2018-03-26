import _ from 'lodash';
import {
    FETCH_ADDRESS_LIST_SUCCESS,
    FETCH_ADDRESS_LIST_FAILURE
} from 'modules/account/addressbook/addressbookActions';

const initialState = {
    addresses: null
};

const authenticationReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ADDRESS_LIST_SUCCESS:
            const a = _.mapKeys(action.payload, '_id');
            console.log(a);
            return {
                ...state,
                addresses: action.payload
            };
        case FETCH_ADDRESS_LIST_FAILURE:

            return {
                ...state,
                addresses: false
            };
        default:
            return state;
    }
};

export default authenticationReducer;
