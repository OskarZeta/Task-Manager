import md5 from 'js-md5';

export default function processData(data) {
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
