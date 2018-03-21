import {
    FETCH_BASKET_REQUEST,
    FETCH_BASKET_SUCCESS,
    FETCH_BASKET_FAILURE
} from './basketActions';

const initialState = {
    basket: null,
    isLoading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BASKET_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_BASKET_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                isLoading: false
            };
        case FETCH_BASKET_FAILURE:
            return {
                ...state,
                basket: null,
                isLoading: false
            };
        default:
            return state;
    }
};
