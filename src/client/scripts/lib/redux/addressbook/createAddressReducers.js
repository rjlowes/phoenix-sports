import {
    CREATE_ADDRESS_REQUEST, 
    CREATE_ADDRESS_SUCCESS,
    CREATE_ADDRESS_FAILURE
} from './createAddressActions';


const defaultState = {
    isFetching: false,
    addresses: []
}

function addresses(state = defaultState, action) {
    switch(action.type) {
        case CREATE_ADDRESS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case CREATE_ADDRESS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                addresses: action.addresses,
                receivedAt: action.receivedAt
            };
        case CREATE_ADDRESS_FAILURE:
            return {
                ...state,
                isFetching: true
            }
        default: 
            return state;
    }
}

export default addresses;