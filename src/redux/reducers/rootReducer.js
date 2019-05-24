import { combineReducers } from 'redux';
import tasks from './tasks';
import loading from './loading';
import sorting from './sorting';
import pagination from './pagination';
import total from './total';

const rootReducer = combineReducers({
  tasks,
  loading,
  sorting,
  page: pagination,
  total
});

export default rootReducer;
