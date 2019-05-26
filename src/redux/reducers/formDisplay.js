import { FORM_SHOW } from '../actionTypes';
import { FORM_HIDE } from '../actionTypes';

const formDisplay = (state = { type: undefined, data: undefined }, action) => {
  switch (action.type) {
    case FORM_SHOW : {
      return { ...action.payload };
    }
    case FORM_HIDE : {
      return {
        type: undefined,
        data: undefined
      };
    }
    default : {
      return state
    }
  }
}

export default formDisplay;
