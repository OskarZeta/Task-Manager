import { SET_SORT_TYPE } from '../actionTypes';
import { SET_SORT_DIRECTION } from '../actionTypes';

export const setSortType = value => ({
  type: SET_SORT_TYPE,
  payload: value
});

export const setSortDirection = value => ({
  type: SET_SORT_DIRECTION,
  payload: value
});
