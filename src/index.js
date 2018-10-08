import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './configureStore'
import * as serviceWorker from './serviceWorker';

/* root container */
const container = document.getElementById('root')
/* configure store */
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Hot reload
module.hot.accept()