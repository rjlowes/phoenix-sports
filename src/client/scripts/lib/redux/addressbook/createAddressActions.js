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