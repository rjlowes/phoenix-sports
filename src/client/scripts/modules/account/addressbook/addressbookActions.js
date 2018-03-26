import axios from 'axios';
import { push } from 'react-router-redux';

// Address list
export const FETCH_ADDRESS_LIST_REQUEST = "FETCH_ADDRESS_LIST_REQUEST";
export const FETCH_ADDRESS_LIST_SUCCESS = "FETCH_ADDRESS_LIST_SUCCESS";
export const FETCH_ADDRESS_LIST_FAILURE = "FETCH_ADDRESS_LIST_FAILURE";

const fetchAddressesSuccess = (addresses) => ({
    type: FETCH_ADDRESS_LIST_SUCCESS,
    payload: addresses
});

const fetchAddressesFailure = () => ({
    type: FETCH_ADDRESS_LIST_FAILURE
});


const ADDRESSES_URL = '/api/customer/addresses';

export function fetchAddressList() {
    return async (dispatch) => {
        try {
            const request = await axios.get(ADDRESSES_URL);

            dispatch(fetchAddressesSuccess(request.data));
        } catch(e) {
            dispatch(fetchAddressesFailure());
        }
    }
}

// export function fetchAddress(id) {
//     return async (dispatch) => {
//         try {
//             const request = await axios.get(`${ADDRESSES_URL}/${id}`);
//
//             dispatch(fetchAddressSuccess())
//         }
//     }
// }

// Address create
export const CREATE_ADDRESS_REQUEST = "CREATE_ADDRESS_REQUEST";
export const CREATE_ADDRESS_SUCCESS = "CREATE_ADDRESS_SUCCESS";
export const CREATE_ADDRESS_FAILURE = "CREATE_ADDRESS_FAILURE";

const createAddressRequest = () => {
    return {
        type: CREATE_ADDRESS_REQUEST
    };
};

const createAddressSuccess = (addresses) => {
    return {
        type: CREATE_ADDRESS_SUCCESS,
        payload: addresses
    };
};

const createAddressFailure = () => {
    return {
        type: CREATE_ADDRESS_FAILURE
    };
};

const getAddressConfig = (address, method = 'POST') => ({
    method: method,
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
    body: JSON.stringify(address)
})

export function createAddress(address, redirect = null) {
    return function(dispatch) {
        dispatch(createAddressRequest());

        return fetch('/api/customer/addresses', getAddressConfig(address))
        .then(response => response.json())
        .then(addresses => {
            if(redirect) {
                dispatch(push(redirect));
            } else {
                dispatch(createAddressSuccess(addresses));
            }
        })
        .catch(() => dispatch(createAddressFailure()));
    }
}


export const updateAddress = (address, redirect) => {
    return dispatch => {
        dispatch(updateAddressRequest());

        return fetch('/api/customer/addresses/' + address._id, getAddressConfig(address, 'PUT'))
        .then(response => {
            if(response.ok) return response.json();
            console.log(response);
            throw new Error('Response not OK');
        })
        .then(addresses => dispatch(push(redirect)))
        .catch(err => dispatch(updateAddressFailure(err)))
    };
};
