import { combineReducers } from 'redux';
import tasks from './tasks';
import loading from './loading';

const rootReducer = combineReducers({
  tasks,
  loading
});

export default rootReducer;
