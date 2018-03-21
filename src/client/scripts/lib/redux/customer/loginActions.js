import fetch from 'isomorphic-fetch';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
};

function loginSuccess(json) {
    console.log('loginSuccess: ', json);
    let newState =  {
        type: LOGIN_SUCCESS,
        isAuthenticated: json.isAuthenticated
    };
    console.log('new state: ', newState);
    return newState;
};

function loginFailure(err) {
    return {
        type: LOGIN_FAILURE
    }
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
