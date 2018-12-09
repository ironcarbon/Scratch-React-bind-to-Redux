import { GET_USERS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('GET_USERS'):
            return {
                ...state,
                items: action.payload
            }
        case ('NEW_POST'):
            console.log(action.payload)
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;

    }

}

// export const newPostReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ('NEW_POST'):
//             return {
//                 ...state,
//                 item: action.payload
//             }
//         default:
//             return state;
//     }
// }