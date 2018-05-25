import {createStore, applyMiddleware, combineReducers} from 'redux';
import petReducer from './reducers/reducers';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({
        petReducer
    }),
    applyMiddleware(thunk)
)

export default store;