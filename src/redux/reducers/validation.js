import { FORM_VALIDATE } from '../actionTypes';
import { FORM_INVALIDATE } from '../actionTypes';
import { FORM_RESET_VALIDATION } from '../actionTypes';

const validation = (state = false, action) => {
  switch (action.type) {
    case FORM_VALIDATE : {
      return true;
    }
    case FORM_INVALIDATE : {
      return action.payload;
    }
    case FORM_RESET_VALIDATION : {
      return false;
    }
    default : {
      return state
    }
  }
}

export default validation;
