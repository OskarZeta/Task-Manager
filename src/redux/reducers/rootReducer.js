import { combineReducers } from 'redux';
import tasks from './tasks';
import loading from './loading';
import sorting from './sorting';
import total from './total';
import login from './login';
import error from './error';
import formErrors from './formErrors';
import formDisplay from './formDisplay';

const rootReducer = combineReducers({
  tasks,
  loading,
  sorting,
  total,
  login,
  error,
  formErrors,
  formDisplay
});

export default rootReducer;
