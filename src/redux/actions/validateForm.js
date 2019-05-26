import { FORM_VALIDATE } from '../actionTypes';
import { FORM_INVALIDATE } from '../actionTypes';
import { FORM_RESET } from '../actionTypes';

export const validateForm = () => ({
  type: FORM_VALIDATE
});

export const invalidateForm = error => ({
  type: FORM_INVALIDATE,
  payload: error
});

export const resetForm = () => ({
  type: FORM_RESET
});
