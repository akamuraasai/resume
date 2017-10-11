import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import multi from 'redux-multi';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './rootReducer';

import Resume from './base/page/Resume';

// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools);

const App = () => (
  <Provider store={store}>
    <Resume />
  </Provider>
);

export default App;
