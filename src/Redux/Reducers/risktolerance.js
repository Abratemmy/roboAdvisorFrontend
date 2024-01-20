import { CREATE, FETCH_ALL, START_LOADING, END_LOADING } from '../constant/ActionTypes';


export const riskToleranceReducer = (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload,
            };
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] };
        default:
            return state;
    }
}