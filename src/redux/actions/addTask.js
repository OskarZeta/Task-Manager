import fetchTasks from './fetchTasks';
import { formValidate, formInvalidate } from './formValidate';
import { baseUrl, devName } from '../../constantValues';

const addTask = task =>
  dispatch => {
    const url = `${baseUrl}create?developer=${devName}`;
    let req = new Request(url);
    let init = {
      method: 'POST',
      body: task
    };
    fetch(req, init)
      .then(res => {
        if (!res.ok) throw new Error(`server error, status = ${res.status}`);
        return res.json();
      })
      .then(({ status, message }) => {
        if (status === 'error') {
          dispatch(formInvalidate(message));
        } else {
          dispatch(formValidate());
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

export default addTask;
