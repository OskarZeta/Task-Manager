import { combineReducers } from 'redux';
import tasks from './tasks';
import loading from './loading';
import sorting from './sorting';
import pagination from './pagination';
import total from './total';
import login from './login';
import validation from './validation';
import formDisplay from './formDisplay';

const rootReducer = combineReducers({
  tasks,
  loading,
  sorting,
  page: pagination,
  total,
  login,
  validation,
  formDisplay
});

export default rootReducer;
