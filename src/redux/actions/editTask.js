import md5 from 'js-md5';
import fetchTasks from './fetchTasks';
import { baseUrl, devName } from '../../constantValues';

function processData(data) {
  let dataSorted = {};
  let params = '';
  Object.entries(data).sort().forEach(pair => {
    dataSorted[encodeURIComponent(pair[0])] = encodeURIComponent(pair[1]);
  });
  Object.entries(dataSorted).forEach(pair => {
    params += `${encodeURIComponent(pair[0])}=${encodeURIComponent(pair[1])}&`;
  });
  params += encodeURIComponent('token') + '=' + encodeURIComponent('beejee');
  dataSorted[encodeURIComponent('token')] = encodeURIComponent('beejee');
  dataSorted['signature'] = md5(params);
  return dataSorted;
}

const editTask = (id, data) =>
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
      })
      .catch(e => {
        console.log(e);
      });
  }

export default editTask;
