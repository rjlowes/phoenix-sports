import {
    CUSTOMER_DETAILS_REQUEST,
    CUSTOMER_DETAILS_SUCCESS,
    CUSTOMER_DETAILS_FAILURE
} from './customerActions';

const defaultState = {
    isFetching: false,
    data: null
}


function customerDetailReducer(state = defaultState, action) {
    switch(action.type) {
        case CUSTOMER_DETAILS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case CUSTOMER_DETAILS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                customerDetails: action.payload
            }
        case CUSTOMER_DETAILS_FAILURE:
            // return {
            //     ...state,
            //     isFetching: false,
            //     data: action.payload
            // };
            Object.assign({}, state, action.payload, {
                isFetching: false
            })
        default:
            return state;
    }
}

export default customerDetailReducer;
