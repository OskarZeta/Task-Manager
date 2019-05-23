import { START_LOADING } from '../actionTypes';
import { STOP_LOADING } from '../actionTypes';

const loading = (state = true, action) => {
  switch (action.type) {
    case START_LOADING : {
      return true;
    }
    case STOP_LOADING : {
      return false;
    }
    default : {
      return state
    }
  }
}

export default loading;
