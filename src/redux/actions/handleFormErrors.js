import { FORM_RESET_ERRORS } from '../actionTypes';
import { FORM_SET_ERRORS } from '../actionTypes';

export const resetFormErrors = () => ({
  type: FORM_RESET_ERRORS
});

export const setFormErrors = error => ({
  type: FORM_SET_ERRORS,
  payload: error
});
