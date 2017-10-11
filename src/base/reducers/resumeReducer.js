const DEFAULT = {
  resume: {
    ptBR: {
      name: '',
      social: [],
      sections: [],
    },
  },
};

export default (state = DEFAULT, action) => {
  const reducer = {
    LOADED: () => ({ ...state, resume: action.payload }),
    DEFAULT: () => state,
  };

  return (reducer[action.type] || reducer.DEFAULT)();
};
