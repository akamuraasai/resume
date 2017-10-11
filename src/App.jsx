import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import multi from 'redux-multi';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './rootReducer';

import Resume from './base/page/Resume';

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers);

const App = () => (
  <Provider store={store}>
    <Resume />
  </Provider>
);

export default App;
