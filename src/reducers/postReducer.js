import { GET_USERS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('GET_USERS'):
            console.log('reducer')
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;

    }

}