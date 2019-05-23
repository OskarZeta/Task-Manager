import { baseUrl, devName } from '../../constantValues';
import fetchTasks from './fetchTasks';

const addTask = task =>
  dispatch => {
    //const url = 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Vasyakov';
    const url = `${baseUrl}create?developer=${devName}`;
    let req = new Request(url);
    let init = {
      method: 'POST',
      body: task
    };
    fetch(req, init)
      .then(res => {
        console.log(res);
        if (!res.ok) throw new Error(`server error, status = ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log(data);
        if (data.status === 'error') throw new Error(`error, ${data}`);
        // dispatch({
        //   type: 'ADD_TASK',
        //   payload: data.message
        // });
        //let url = 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Example';
        dispatch(fetchTasks(baseUrl + '?developer=' + devName));
      })
      .catch(e => {
        console.log(e.message);
      });
  }

export default addTask;
