import { combineReducers } from 'redux';
import resumeReducer from './base/reducers/resumeReducer';

const rootReducer = combineReducers({
  resumeReducer,
});

export default rootReducer;
