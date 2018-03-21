import {
    ADDRESSESBOOK_FETCH_REQUEST, 
    ADDRESSESBOOK_FETCH_SUCCESS,
    ADDRESSESBOOK_FETCH_FAILURE
} from 'lib/redux/addressbook/addressBookConstants';


const defaultState = {
    isFetching: false,
    addresses: []
}

function addresses(state = defaultState, action) {
    switch(action.type) {
        case ADDRESSESBOOK_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case ADDRESSESBOOK_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                addresses: action.addresses,
                receivedAt: action.receivedAt
            };
        case ADDRESSESBOOK_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        default: 
            return state;
    }
}

export default addresses;