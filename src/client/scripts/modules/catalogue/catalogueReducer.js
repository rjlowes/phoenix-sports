import {
    FETCH_PRODUCT_LIST_REQUEST,
    FETCH_PRODUCT_LIST_SUCCESS,
    FETCH_PRODUCT_LIST_FAILURE,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAILURE
} from './catalogueActions';

const initialState = {
    products: [],
    product: null,
    category: null,
    isLoading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCT_LIST_REQUEST:
            return {
                ...state,
                products: [],
                isLoading: true
            };
        case FETCH_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                isLoading: false
            };
        case FETCH_PRODUCT_LIST_FAILURE:
            return {
                ...state,
                products: [],
                isLoading: false
            };
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                product: null,
                isLoading: true
            };
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload.product,
                isLoading: false
            };
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                product: null,
                isLoading: false
            };
        case FETCH_CATEGORY_REQUEST:
            return {
                ...state,
                category: null,
                isLoading: true
            };
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.payload.category,
                isLoading: false
            };
        case FETCH_CATEGORY_FAILURE:
            return {
                ...state,
                category: null,
                isLoading: false
            };
        default:
            return state;
    }
};
