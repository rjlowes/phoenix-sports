export const ADD_TO_BASKET_REQUEST = "ADD_TO_BASKET_REQUEST";
export const ADD_TO_BASKET_SUCCESS = "ADD_TO_BASKET_SUCCESS";
export const ADD_TO_BASKET_FAILURE = "ADD_TO_BASKET_FAILURE";
export const FETCH_BASKET_REQUEST = "FETCH_BASKET_REQUEST";
export const FETCH_BASKET_SUCCESS = "FETCH_BASKET_SUCCESS";
export const FETCH_BASKET_FAILURE = "FETCH_BASKET_FAILURE";

const fetchBasketRequest = () => {
    return {type: FETCH_BASKET_REQUEST};
};

const fetchBasketSuccess = (json) => {
    return {
        type: FETCH_BASKET_SUCCESS,
        payload: json
    };
};

const fetchBasketFailure = (err) => {
    return {type: FETCH_BASKET_FAILURE, err: err};
};

export function fetchBasket() {
    return (dispatch) => {
        dispatch(fetchBasketRequest);

        fetch('/api/basket', {
            method: 'GET',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(json => dispatch(fetchBasketSuccess(json)))
        .catch(err => dispatch(fetchBasketFailure(err)));
    }
}

function addToBasketRequest() {
    return {type: ADD_TO_BASKET_REQUEST};
}

function addToBasketSuccess(json) {
    return {
        type: ADD_TO_BASKET_SUCCESS,
        payload: {category: json}
    };
}

function addToBasketFailure(err) {
    return {
        type: ADD_TO_BASKET_FAILURE,
        payload: {err}
    };
}

export function addToBasket(sku, qty = 1) {
    console.log(sku, qty);
    return (dispatch) => {
        dispatch(addToBasketRequest());

        fetch('/api/basket', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({sku: sku, qty: qty})
        })
        .then(response => response.json())
        .then(json => {
            dispatch(addToBasketSuccess(json));
            dispatch(fetchBasket());
        })
        .catch(err => dispatch(addToBasketFailure(err)));
    }
}
