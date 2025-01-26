import http from 'k6/http';
import {sleep} from 'k6'

export const options = {
  stages: [
    {
      duration: '10s',
      target: 10,
    },

    {
      duration: '30s',
      target: 10,
    },

    {
      duration: '10s',
      target: 0,
    }
  ]
}

export default  function () {
  const url = 'https://sso.bpjsketenagakerjaan.go.id/'
  http.get(url);
  sleep(1);
}