import { SET_SORT_TYPE } from '../actionTypes';
import { SET_SORT_DIRECTION } from '../actionTypes';

const sorting = (state = { sort_field: 'id', sort_direction: 'asc' }, action) => {
  switch (action.type) {
    case SET_SORT_TYPE : {
      return { ...state, sort_field: action.payload };
    }
    case SET_SORT_DIRECTION : {
      return { ...state, sort_direction: action.payload };
    }
    default : {
      return state
    }
  }
}

export default sorting;
