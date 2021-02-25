import { ERROR } from './types';
import history from '../history';

export const handlingFetchError = (err, dispatch) => {
    if (err.response) {
        dispatch({
            type: ERROR,
            payload: err.response,
        })
        history.push('/error')

    } else if (err.request) {
        history.push('/')
    } else {
        history.push('/')
    }
}