import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Provider
} from 'react-redux';
import {
  createStore,
  combineReducers
} from "redux";

const initialState = {
  reducer: {
    spinner: false,
    stores: []
  }
};

const rootReducer = combineReducers({ reducer });
const store = () => {
  return createStore(rootReducer, initialState);
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SPINNER':
      return {
        ...state,
        spinner: action.spinner
      }
    case 'FETCH_STORES':
      return {
        ...state,
        stores: action.stores
      }
    default:
      return state;
  }
};

ReactDOM.render( 
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();