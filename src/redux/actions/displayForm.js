import { FORM_SHOW } from '../actionTypes';
import { FORM_HIDE } from '../actionTypes';

export const showForm = form => ({
  type: FORM_SHOW,
  payload: {
    type: form.type,
    data: form.data
  }
});

export const hideForm = form => ({
  type: FORM_HIDE
});
