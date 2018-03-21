export const ADDRESSES_LIST_REQUEST = "ADDRESSES_LIST_REQUEST";
export const ADDRESSES_LIST_SUCCESS = "ADDRESSES_LIST_SUCCESS";
export const ADDRESSES_LIST_ERROR = "ADDRESSES_LIST_ERROR";

function addressListRequest() {
    console.log('addressListRequest');
    return {
        type: ADDRESSES_LIST_REQUEST
    };
}


function addressListSuccess(json) {
    console.log('addressListSuccess');
    return {
        type: ADDRESSES_LIST_SUCCESS,
        addressbook: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    };
}

function addressListFailure(err) {
    return {

    };
}

export function fetchAddresses() {
    console.log('fetchAddresses');
    return function(dispatch) {
        console.log('in disp');
        dispatch(addressListRequest());
        
        return fetch('/api/customer/addresses')
            .then(response => response.json(), error => console.log('An error occurred ', error))
            .then(json => dispatch(addressListSuccess(json)));
    }
}


// Create an address 

export const CREATE_ADDRESS_REQUEST = "CREATE_ADDRESS_REQUEST";
export const CREATE_ADDRESS_SUCCESS = "CREATE_ADDRESS_SUCCESS";
export const CREATE_ADDRESS_FAILURE = "CREATE_ADDRESS_FAILURE";

function createAddressRequest() {
    console.info('createAddressRequest');
    return {
        type: CREATE_ADDRESS_REQUEST
    };
}

function createAddressSuccess(json) {
    console.info('createAddressSuccess', json);
    return {
        type: CREATE_ADDRESS_SUCCESS
    };
}

function createAddressFailure(err) {
    console.info('createAddressFailure', err);
    return {
        type: CREATE_ADDRESS_FAILURE
    };
}

export function createAddress(address) {
    return function(dispatch) {
        dispatch(createAddressRequest());

        console.log('dispact ', address);

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
            
        // return fetch('/api/customer/addressbook', {method: 'POST'})
        //     .then(response => response.json, err => dispatch(createAddressFailure(err))
        //     .then(json => dispatch(createAddressSuccess(json)));
    }
}