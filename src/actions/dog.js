import {API_BASE_URL} from '../config'

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (dog) => ({
    type: FETCH_DOG_SUCCESS,
    dog
})

export const fetchDog = () => dispatch => {
    fetch(`${API_BASE_URL}/api/dog`, {
        method: 'GET'
    })
    .then((res) => res.json(res))
    .then((result) => {
        dispatch(fetchDogSuccess(result))
    })
    .catch((err) => console.error(err))
}

export const adoptDog = () => dispatch => {
    fetch(`${API_BASE_URL}/api/dog`, {
        method: 'DELETE'
    })
    .then((res) => res.json(res))
    .then((result) => {
        dispatch(fetchDogSuccess(result))
    })
    .catch((err) => console.error(err))
}