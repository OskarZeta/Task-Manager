import fetchTasks from './fetchTasks';
import { formHide } from './formDisplay';
import { baseUrl, devName } from '../../constantValues';
import processData from '../../utils/processData';
import serialize from '../../utils/serialize';

const editTask = (id, data, fetchParams) =>
  dispatch => {
    const dataSorted = processData(data);
    let formData = new FormData();
    for (let key in dataSorted) {
      formData.append(key, dataSorted[key]);
    }
    const url = `${baseUrl}edit/${id}?developer=${devName}`;
    let req = new Request(url);
    let init = {
      method: 'POST',
      body: formData
    };
    fetch(req, init)
      .then(res => {
        if (!res.ok) throw new Error(`server error, status = ${res.status}`);
        return res.json();
      })
      .then(({ status, message }) => {
        if (status === 'error') throw new Error(`error, ${message}`);
        dispatch(formHide());
        const urlFetch = `${baseUrl}?developer=${devName}` + serialize(fetchParams);
        dispatch(fetchTasks(urlFetch));
      })
      .catch(e => {
        console.log(e);
      });
  }

export default editTask;
