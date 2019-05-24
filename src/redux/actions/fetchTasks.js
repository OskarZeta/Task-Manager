import { FETCH_TASKS } from '../actionTypes';
import { startLoading, stopLoading } from './handleLoading';
import setTotal from './setTotal';

const setTasks = tasks => ({
  type: FETCH_TASKS,
  payload: tasks
});

const fetchTasks = url =>
  dispatch => {
    let req = new Request(url);
    dispatch(startLoading());
    fetch(req)
      .then(res => {
        if (!res.ok) throw new Error(`server error, status = ${res.status}`);
        return res.json();
      })
      .then(({ status, message }) => {
        if (status === 'error') throw new Error(`error, ${message}`);
        let tasks = [];
        message.tasks.forEach(task => {
          let decodedTask = {};
          Object.entries(task).forEach(pair => {
            decodedTask[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
          });
          tasks.push(decodedTask);
        });
        dispatch(setTasks(tasks));
        dispatch(setTotal(message.total_task_count));
        dispatch(stopLoading());
      })
      .catch(e => {
        console.log(e.message);
      });
  }

export default fetchTasks;
