import {
    FETCH_ADDRESS_LIST_REQUEST,
    FETCH_ADDRESS_LIST_SUCCESS,
    FETCH_ADDRESS_LIST_FAILURE
} from 'modules/account/addressbook/addressbookActions';

const initialState = {
    addresses: null,
    isLoading: false
};

const authenticationReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ADDRESS_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_ADDRESS_LIST_SUCCESS:
            return {
                ...state,
                addresses: action.payload,
                isLoading: false
            };
        case FETCH_ADDRESS_LIST_FAILURE:
            return {
                ...state,
                addresses: false,
                isLoading: false
            };
        default:
            return state;
    }
};

export default authenticationReducer;
