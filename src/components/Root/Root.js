import React from 'react';
import appReducers from 'reducers/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ children }) => (
  <Provider
    store={createStore(
      appReducers,
      composeEnhancers(applyMiddleware(reduxThunk))
    )}
  >
    {children}
  </Provider>
);
