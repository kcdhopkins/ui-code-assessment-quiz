import React from 'react';
import ReactDOM from 'react-dom';
import  App  from './client/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './client/reducers/reducer';
import './index.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);