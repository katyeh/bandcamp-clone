import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.sass';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';

const userInfo = localStorage.getItem('user-info');
let store;
if (userInfo) store = configureStore({ token: JSON.parse(userInfo).token });
else store = configureStore();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
