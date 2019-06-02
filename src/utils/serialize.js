export default function serialize(params) {
  let paramsString = '';
  for (let key in params) {
    paramsString += `&${key}=${params[key]}`
  }
  return paramsString;
}
