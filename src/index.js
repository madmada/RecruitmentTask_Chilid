import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import configureStore from './stores/configureStore';
import * as actions from './actions/index';
import App from './components/App';
import reducers from './reducers';
import {data} from './mockedData';


const store = configureStore();

store.dispatch(actions.setItems(data));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
