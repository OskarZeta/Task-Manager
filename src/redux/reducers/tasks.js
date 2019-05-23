import { FETCH_TASKS } from '../actionTypes';
//import { ADD_TASK } from '../actionTypes';

const tasks = (state = [], action) => {
  switch (action.type) {
    case FETCH_TASKS : {
      return action.payload;
    }
    // case ADD_TASK : {
    //   return state.concat(action.payload);
    // }
    default : {
      return state
    }
  }
}

export default tasks;
