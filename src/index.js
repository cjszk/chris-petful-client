import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

console.log(store.getState())

ReactDOM.render(
    <Provider store={store} >
        <Dashboard />
    </Provider >

    , document.getElementById('root'));
registerServiceWorker();
