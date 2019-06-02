import { FORM_RESET_ERRORS } from '../actionTypes';
import { FORM_SET_ERRORS } from '../actionTypes';

const formErrors = (state = {}, action) => {
  switch (action.type) {
    case FORM_SET_ERRORS : {
      return action.payload;
    }
    case FORM_RESET_ERRORS : {
      return {};
    }
    default : {
      return state
    }
  }
}

export default formErrors;
