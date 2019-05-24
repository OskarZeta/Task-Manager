import { SET_TOTAL_RESULTS } from '../actionTypes';

const total = (state = 0, action) => {
  switch (action.type) {
    case SET_TOTAL_RESULTS : {
      return action.payload;
    }
    default : {
      return state
    }
  }
}

export default total;
