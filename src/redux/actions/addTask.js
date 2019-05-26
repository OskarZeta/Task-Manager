import { baseUrl, devName } from '../../constantValues';
import fetchTasks from './fetchTasks';
import { validateForm, invalidateForm, resetForm } from './validateForm';

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
        //console.log(res);
        if (!res.ok) throw new Error(`server error, status = ${res.status}`);
        return res.json();
      })
      .then(data => {
        //console.log(data);
        dispatch(resetForm());
        if (data.status === 'error') {
          dispatch(invalidateForm(data.message));
        } else {
          dispatch(validateForm());
          dispatch(fetchTasks(baseUrl + '?developer=' + devName));
        }
      })
      .catch(e => {
        console.log(e.message);
      });
  }

export default addTask;
