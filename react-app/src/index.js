import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


const userInfo = localStorage.getItem('user-info');
const userId = localStorage.getItem('user_id');
let store;
if (userId) store = configureStore();
// if (userId) store = configureStore({ token: JSON.parse(userInfo).token });
else store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
