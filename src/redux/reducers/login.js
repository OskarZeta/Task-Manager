import { LOG_IN } from '../actionTypes';

const login = (state = false, action) => {
  switch (action.type) {
    case LOG_IN : {
      return true;
    }
    default : {
      return state
    }
  }
}

export default login;
