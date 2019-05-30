import { FORM_SHOW } from '../actionTypes';
import { FORM_HIDE } from '../actionTypes';

export const formShow = form => ({
  type: FORM_SHOW,
  payload: {
    type: form.type,
    data: form.data
  }
});

export const formHide = form => ({
  type: FORM_HIDE
});
