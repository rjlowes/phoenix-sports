export const FETCH_NAVIGATION_REQUEST = 'FETCH_NAVIGATION_REQUEST';
export const FETCH_NAVIGATION_SUCCESS = 'FETCH_NAVIGATION_SUCCESS';
export const FETCH_NAVIGATION_FAILURE = 'FETCH_NAVIGATION_FAILURE';

const fetchNavigationRequest = () => {
    return {
        type: FETCH_NAVIGATION_REQUEST
    };
};

const fetchNavigationSuccess = (data) => {
    return {
        type: FETCH_NAVIGATION_SUCCESS,
        payload: data
    };
};

const fetchNavigationFailure = () => {
    return {
        type: FETCH_NAVIGATION_FAILURE
    };
};

const fetchNavigation = () => {
    return (dispatch) => {
        dispatch(fetchNavigationRequest());

        return fetch('/api/category-hierarchy', {
            method: 'GET',
            headers: {'Content-Type':'application/json'}
        }).then(response => response.json(), err => dispatch(fetchNavigationFailure()))
        .then(data => dispatch(fetchNavigationSuccess(data)));
    };
};

export {fetchNavigation};