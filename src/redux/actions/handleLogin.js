import { LOG_IN } from '../actionTypes';
import { LOG_OUT } from '../actionTypes';

export const logIn = () => ({
  type: LOG_IN
});

export const logOut = () => ({
  type: LOG_OUT
});
