import http from 'k6/http';
import {sleep} from 'k6'

export const options = {
  vus: 10,
  duration:  '10s'
}

export default  function () {
  // http.get('https://test.k6.io');
  http.get('https://archify:archify@www.bluprindev.com/id/');
  sleep(1);
}