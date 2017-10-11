import reducer from './resumeReducer';

const DEFAULT = {
  resume: {
    ptBR: {
      name: '',
      social: [],
      sections: [],
    },
  },
};

describe('Resume Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(DEFAULT);
  });

  it('should handle LOADED state', () => {
    const fetched = {
      type: 'LOADED',
      payload: {
        resume: {
          ptBR: {
            name: 'John Due',
            social: [
              { id: 1, text: 'facebook', value: 'https://fb.com' },
              { id: 2, text: 'twitter', value: 'https://twitter.com' },
            ],
            sections: [
              {
                id: 1,
                menu: 'foo',
                title: 'bar',
                containers: [
                  { id: 1, title: 'foobar', description: 'barfoo', items: [] },
                ],
              },
            ],
          },
        },
      },
    };
    expect(reducer(DEFAULT, fetched)).toEqual({ resume: fetched.payload });
  });
});
