import { SET_TOTAL_RESULTS } from '../actionTypes';

const setTotal = value => ({
  type: SET_TOTAL_RESULTS,
  payload: value
});

export default setTotal;
