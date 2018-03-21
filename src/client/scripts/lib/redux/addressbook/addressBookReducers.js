import {
    ADDRESSBOOK_FETCH_REQUEST, 
    ADDRESSBOOK_FETCH_SUCCESS,
    ADDRESSBOOK_FETCH_FAILURE
} from 'lib/redux/addressbook/addressBookConstants';


const defaultState = {
    isFetching: false,
    addresses: []
}

function addresses(state = defaultState, action) {
    switch(action.type) {
        case ADDRESSBOOK_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case ADDRESSBOOK_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                addresses: action.addresses,
                receivedAt: action.receivedAt
            };
        case ADDRESSBOOK_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        default: 
            return state;
    }
}

export default addresses;