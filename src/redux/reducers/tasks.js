import { FETCH_TASKS } from '../actionTypes';

const tasks = (state = [], action) => {
  switch (action.type) {
    case FETCH_TASKS : {
      return action.payload;
    }
    default : {
      return state
    }
  }
}

export default tasks;
