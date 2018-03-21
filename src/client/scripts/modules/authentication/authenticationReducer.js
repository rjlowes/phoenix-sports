import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from 'modules/authentication/authenticationConstants';


const initialState = {
    isFetching: false,
    isAuthenticated: false,
    customer: null
};


function authenticationReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: action.payload.isAuthenticated,
                customer: action.payload.customer
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    }
}

export default authenticationReducer;
