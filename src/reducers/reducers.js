import {FETCH_DOG_SUCCESS} from '../actions/dog';
import {FETCH_CAT_SUCCESS} from '../actions/cat';

const initialState = {
    catToAdopt: {
        data: {
            imageURL: null, 
            imageDescription: null,
            name: null,
            sex: null,
            age: null,
            breed: null,
            story: null
          },
        error: null,
        loading: true
    },
    dogToAdopt: {
        data: {
            imageURL: null, 
            imageDescription: null,
            name: null,
            sex: null,
            age: null,
            breed: null,
            story: null
        },
        error: null,
        loading: true
    }
}

export default function reducer(state = initialState, action) {

    if (action.type === FETCH_DOG_SUCCESS) {
        return Object.assign({}, state, {
            dogToAdopt: {
                data: action.dog,
                error: null,
                loading: false
            }
        })
    } else if (action.type === FETCH_CAT_SUCCESS) {
        return Object.assign({}, state, {
            catToAdopt: {
                data: action.cat,
                error: null,
                loading: false
            }
        })
    }

    return state;
}