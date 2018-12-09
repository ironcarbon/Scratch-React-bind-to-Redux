import { GET_USERS, NEW_POST } from './types';
import axios from 'axios';

export const getUsersAction = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => dispatch({
            type: GET_USERS,
            payload: res.data
        }))
}



export const newPostAction = (postData) => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: postData
    })
        .then(res => dispatch({
            type: NEW_POST,
            payload: res.data
        }))

}