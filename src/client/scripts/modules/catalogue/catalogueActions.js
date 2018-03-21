export const FETCH_PRODUCT_LIST_REQUEST = "FETCH_PRODUCT_LIST_REQUEST";
export const FETCH_PRODUCT_LIST_SUCCESS = "FETCH_PRODUCT_LIST_SUCCESS";
export const FETCH_PRODUCT_LIST_FAILURE = "FETCH_PRODUCT_LIST_FAILURE";
export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";
export const FETCH_CATEGORY_REQUEST = "FETCH_CATEGORY_REQUEST";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_CATEGORY_FAILURE = "FETCH_CATEGORY_FAILURE";

function fetchProductListRequest() {
    return {
        type: FETCH_PRODUCT_LIST_REQUEST
    };
}

function fetchProductListSuccess(json) {
    return {
        type: FETCH_PRODUCT_LIST_SUCCESS,
        payload: {products: json}
    };
}

function fetchProductListFailure(err) {
    return {
        type: FETCH_PRODUCT_LIST_FAILURE,
        payload: {err}
    };
}

export function fetchProducts() {
    return function(dispatch) {
        dispatch(fetchProductListRequest());

        return fetch('/api/categories/menswear/products', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => dispatch(fetchProductListSuccess(json)));
        // .catch(err => dispatch(fetchProductListFailure(err)));
    }
}

function fetchProductRequest() {
    return {
        type: FETCH_PRODUCT_REQUEST
    };
}

function fetchProductSuccess(json) {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: {product: json}
    };
}

function fetchProductFailure(err) {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: {err}
    };
}

export function fetchProduct(productId) {
    return function(dispatch) {
        dispatch(fetchProductRequest());

        return fetch('/api/products/' + productId, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => dispatch(fetchProductSuccess(json)));
        // .catch(err => dispatch(fetchProductListFailure(err)));
    }
}

function fetchCategoryRequest() {
    return {
        type: FETCH_CATEGORY_REQUEST
    };
}

function fetchCategorySuccess(json) {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload: {category: json}
    };
}

function fetchCategoryFailure(err) {
    return {
        type: FETCH_CATEGORY_FAILURE,
        payload: {err}
    };
}

export function fetchCategory(categoryId) {
    return function(dispatch) {
        dispatch(fetchCategoryRequest());

        return fetch('/api/categories/' + categoryId, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => dispatch(fetchCategorySuccess(json)));
        // .catch(err => dispatch(fetchProductListFailure(err)));
    }
}
