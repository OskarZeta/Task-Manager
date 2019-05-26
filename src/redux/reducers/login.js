import { LOG_IN } from '../actionTypes';
import { LOG_OUT } from '../actionTypes';

const login = (state = false, action) => {
  switch (action.type) {
    case LOG_IN : {
      return true;
    }
    case LOG_OUT : {
      return false;
    }
    default : {
      return state
    }
  }
}

export default login;
