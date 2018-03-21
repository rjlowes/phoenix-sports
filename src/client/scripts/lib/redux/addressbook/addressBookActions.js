import {
    ADDRESSBOOK_FETCH_REQUEST,
    ADDRESSBOOK_FETCH_SUCCESS,
    ADDRESSBOOK_FETCH_ERROR,
    ADDRESSBOOK_CREATE_REQUEST,
    ADDRESSBOOK_CREATE_SUCCESS,
    ADDRESSBOOK_CREATE_ERROR,
} from 'lib/redux/addressbook/addressBookConstants';


/**
 * Address list action creators
 */
function addressListRequest() {
    return {
        type: ADDRESSBOOK_FETCH_REQUEST
    };
}

function addressListSuccess(json) {
    console.log('addressListSuccess: ', json);
    return {
        type: ADDRESSBOOK_FETCH_SUCCESS,
        addresses: json,
        receivedAt: Date.now()
    };
}

function addressListFailure(err) {
    return {
        type: ADDRESSBOOK_FETCH_ERROR
    };
}

export function fetchAddressList() {
    return function(dispatch) {
        dispatch(addressListRequest());
        return fetch('/api/customer/addresses', {method: 'GET', credentials: 'include'})
            .then(response => response.json(), err => dispatch(addressListFailure(err)))
            .then(json => dispatch(addressListSuccess(json)));
    }
}

/**
 * Fetch address action creators
 */



/**
 * Create address action creators
 */
function createAddressRequest() {
    console.info('createAddressRequest');
    return {
        type: ADDRESSBOOK_CREATE_REQUEST
    };
}

function createAddressSuccess(json) {
    console.info('createAddressSuccess', json);
    return {
        type: ADDRESSBOOK_CREATE_SUCCESS
    };
}

function createAddressFailure(err) {
    console.info('createAddressFailure', err);
    return {
        type: ADDRESSBOOK_CREATE_FAILURE
    };
}

export function createAddress(address) {
    return function(dispatch) {
        dispatch(createAddressRequest());

        let request = new Request('/api/customer/addresses', {
            method: 'POST',
            body: JSON.stringify(address),
            credentials: 'include',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });

        return fetch(request)
            .then(response => response.json(), error => console.log('An error occurred ', error))
            .then(json => dispatch(createAddressSuccess(json)));
    }
}