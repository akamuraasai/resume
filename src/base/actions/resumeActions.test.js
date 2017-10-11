import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './resumeActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  it('should receive the resume and return a redux action with the value', () => {
    const resumeSample = {
      ptBR: {
        name: 'John Due',
        sections: [],
        social: [],
      },
    };
    const expectedAction = {
      type: 'LOADED',
      payload: resumeSample,
    };

    expect(actions.receiveResume(resumeSample)).toEqual(expectedAction);
  });

  it('should check firebase and get resume data', () => {
    const resumeSample = {
      resume: {
        ptBR: {
          name: '',
          social: [],
          sections: [],
        },
      },
    };

    const firebase = {
      val: () => resumeSample,
    };

    const expectedAction = {
      type: 'LOADED',
      payload: resumeSample,
    };

    const store = mockStore({});
    expect(store.dispatch(actions.fetchResume())(firebase)).toEqual(expectedAction);
  });
});
