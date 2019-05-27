import { SET_SORTING } from '../actionTypes';

const sorting = (state = {
  sort_field: 'username', sort_direction: 'asc', page: 1
}, action) => {
  switch (action.type) {
    case SET_SORTING : {
      return { ...action.payload }
    }
    default : {
      return state
    }
  }
}

export default sorting;
