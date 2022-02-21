import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';

import { createStore, combineReducers,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import productsReducer from './store/reducers';
import mySaga from './sagas';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  products: productsReducer
})

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
