import axios from 'axios'

export default async function getData(method, url, data = {}) {
  let res = await axios({
    method,
    url,
    data
  });
  return res.data;
}