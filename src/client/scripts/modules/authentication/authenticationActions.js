import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from 'lib/redux/authentication/authenticationConstants';

/**
 * Login actions
 */
 function loginRequest() {
    return {
        type: LOGIN_REQUEST
    };
};

const loginSuccess = (json) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {isAuthenticated: json.isAuthenticated, customer: json.customer}
    };
};

function loginFailure(err) {
    return {
        type: LOGIN_FAILURE
    };
}

export function login(credentials) {
    return function (dispatch) {
        dispatch(loginRequest());

        return fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
            credentials: 'include'
        })
        .then(response => response.json(), error => dispatch(loginFailure(err)))
        .then(json => dispatch(loginSuccess(json)));
    }
}

export {loginSuccess};
