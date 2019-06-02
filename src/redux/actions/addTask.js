import fetchTasks from './fetchTasks';
import { setFormErrors, resetFormErrors } from './handleFormErrors';
import { formHide } from './formDisplay';
import setError from './handleError';
import { baseUrl, devName } from '../../constantValues';
import serialize from '../../utils/serialize';

const addTask = (task, fetchParams) =>
  dispatch => {
    const url = `${baseUrl}create?developer=${devName}`;
    let req = new Request(url);
    let init = {
      method: 'POST',
      body: task
    };
    fetch(req, init)
      .then(res => {
        if (!res.ok) throw new Error(`Server error, status = ${res.status}`);
        return res.json();
      })
      .then(({ status, message }) => {
        if (status === 'error') {
          dispatch(setFormErrors(message));
        } else {
          dispatch(formHide());
          const urlFetch = `${baseUrl}?developer=${devName}` + serialize(fetchParams);
          dispatch(fetchTasks(urlFetch));
        }
      })
      .catch(e => {
        console.log(e);
        dispatch(setError(e.message));
      });
  }

export default addTask;
