export default (state = { resume: {} }, action) => {
  const reducer = {
    LOADED: () => ({ ...state, resume: action.payload }),
    DEFAULT: () => state,
  };

  return (reducer[action.type] || reducer.DEFAULT)();
};
