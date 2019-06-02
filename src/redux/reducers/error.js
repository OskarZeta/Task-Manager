import { SET_ERROR } from '../actionTypes';

const error = (state = {
  isError: false,
  text: ''
}, action) => {
  switch (action.type) {
    case SET_ERROR : {
      return {
        isError: true,
        text: action.payload
      };
    }
    default : {
      return state
    }
  }
}

export default error;
