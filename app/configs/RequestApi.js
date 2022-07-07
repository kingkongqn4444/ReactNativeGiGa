import axios from 'axios';
const METHOD_GET = 'GET';
async function requestAPI(method, url, headers = {}, dataBody) {
  headers['Content-Type'] = 'application/json';
  headers.accept = 'application/json';
  const config = {
    url: url,
    headers: headers,
    method: method,
    timeout: 5000,
  };
  if (method === METHOD_GET) {
    config.params = dataBody;
  } else {
    config.data = dataBody;
  }
  return axios(config)
    .then(async (res) => {
      return res;
    })
    .catch((err) => {
      return err.response.data;
    });
}

export default {
  get(url, headers = {}, dataBody = {}) {
    return requestAPI(METHOD_GET, url, headers, dataBody);
  },
};
