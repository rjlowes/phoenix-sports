import {
    FETCH_NAVIGATION_REQUEST,
    FETCH_NAVIGATION_SUCCESS,
    FETCH_NAVIGATION_FAILURE
} from 'modules/App/appActions';

const initialState = {
    categories: [],
    loading: false,
    depth: 0
};

const appReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case FETCH_NAVIGATION_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_NAVIGATION_SUCCESS:
            let {cats, depth} = action.payload;
            
            return {
                ...state,
                categories: cats,
                depth: depth,
                loading: false
            };
        case FETCH_NAVIGATION_FAILURE:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
};

export default appReducer;