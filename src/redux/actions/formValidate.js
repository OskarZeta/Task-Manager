import { FORM_VALIDATE } from '../actionTypes';
import { FORM_INVALIDATE } from '../actionTypes';
import { FORM_RESET_VALIDATION } from '../actionTypes';

export const formValidate = () => ({
  type: FORM_VALIDATE
});

export const formInvalidate = error => ({
  type: FORM_INVALIDATE,
  payload: error
});

export const formResetValidation = () => ({
  type: FORM_RESET_VALIDATION
});
