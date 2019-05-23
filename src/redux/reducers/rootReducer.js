import { combineReducers } from 'redux';
import tasks from './tasks';
import loading from './loading';
import sorting from './sorting';

const rootReducer = combineReducers({
  tasks,
  loading,
  sorting
});

export default rootReducer;
