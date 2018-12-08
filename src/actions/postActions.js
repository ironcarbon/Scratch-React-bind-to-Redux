import { GET_USERS } from './types';
import axios from 'axios';

export const getUsersAction = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => dispatch({
            type: GET_USERS,
            payload: res.data
        }))
}



