import fetch from 'isomorphic-fetch';

export const CUSTOMER_DETAILS_REQUEST = 'CUSTOMER_DETAILS_REQUEST';
export const CUSTOMER_DETAILS_SUCCESS = 'CUSTOMER_DETAILS_SUCCESS';
export const CUSTOMER_DETAILS_FAILURE = 'CUSTOMER_DETAILS_FAILURE';


function customerDetailsRequest() {
    return {
        type: CUSTOMER_DETAILS_REQUEST
    }
};


function customerDetailsSuccess(json) {
    return Object.assign({}, json, {
        type: CUSTOMER_DETAILS_SUCCESS,
        receivedAt: Date.now(),
        payload: json
    });
};

function customerDetailsFailure(err) {
    return {
        type: CUSTOMER_DETAILS_FAILURE,
        receivedAt: Date.now(),
        payload: {test: 123}
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function getCustomerDetails() {
    return function (dispatch) {
        dispatch(customerDetailsRequest());

        return fetch('/api/customer', {
            method: 'get',
            credentials: 'include'
        })
        .then(handleErrors)
        .then(response => response.json(), error => dispatch(customerDetailsFailure(error)))
        .then(json => dispatch(customerDetailsSuccess(json)));
    }
}
