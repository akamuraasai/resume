import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Resume from './Resume';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const resumeDefault = {
  resume: {
    ptBR: {
      name: '',
      social: [],
      sections: [],
    },
  },
};

describe('Resume', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    const store = mockStore({ resumeReducer: resumeDefault });
    ReactDOM.render(
      <Provider store={store}>
        <Resume />
      </Provider>, div);
  });

  it('should render some sections', () => {
    const div = document.createElement('div');
    const sections = {
      ...resumeDefault,
      resume: {
        ...resumeDefault.resume,
        ptBR: {
          ...resumeDefault.resume.ptBR,
          sections: [
            { id: 1, menu: 'foo', title: 'bar', containers: [] },
            { id: 2, menu: 'john', title: 'due', containers: [] },
          ],
        },
      },
    };
    const store = mockStore({ resumeReducer: sections });
    ReactDOM.render(
      <Provider store={store}>
        <Resume />
      </Provider>, div);
  });
});
