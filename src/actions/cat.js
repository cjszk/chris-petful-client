import {API_BASE_URL} from '../config';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
    type: FETCH_CAT_SUCCESS,
    cat
})

export const fetchCat = () => dispatch => {
    
    fetch(`${API_BASE_URL}/api/cat`, {
        method: 'GET'
    })
    .then((res) => res.json(res))    
    .then((res) => {
        dispatch(fetchCatSuccess(res))
    })
    .catch((err) => console.error(err))
}

export const adoptCat = () => dispatch => {
    fetch(`${API_BASE_URL}/api/cat`, {
        method: 'DELETE'
    })
    .then((res) => res.json(res))
    .then((result) => {
        dispatch(fetchCatSuccess(result))
    })
    .catch((err) => console.error(err))    
}
