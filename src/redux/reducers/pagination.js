import { SET_PAGE } from '../actionTypes';

const pagination = (state = 1, action) => {
  switch (action.type) {
    case SET_PAGE : {
      return action.payload;
    }
    default : {
      return state
    }
  }
}

export default pagination;
