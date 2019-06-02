import { SET_ERROR } from '../actionTypes';
// export const setError = value => ({
//   type: 'SET_ERROR',
//   payload: {
//     isError: true,
//     text: value
//   }
// });
//
// export const clearError = () => ({
//   type: 'CLEAR_ERROR',
//   payload: {
//     isError: false,
//     text: ''
//   }
// });

const setError = value => ({
  type: SET_ERROR,
  payload: value
});

export default setError;
