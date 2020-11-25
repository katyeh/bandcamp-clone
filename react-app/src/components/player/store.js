import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers
import { reducer } from './action_reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = defaultState => {
  return createStore(
    reducer,
    defaultState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

const store = configureStore();

export default store;
