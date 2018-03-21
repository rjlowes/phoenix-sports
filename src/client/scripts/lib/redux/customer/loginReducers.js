import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './loginActions';

const defaultState = {
    isFetching: false,
    isAuthenticated: false
}

const loginSuccess = (state, loggedIn) => {
    return state['loggedIn'] = loggedIn;
};

function loginReducer(state = defaultState, action) {
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
                isAuthenticated: action.isAuthenticated
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

export default loginReducer;
