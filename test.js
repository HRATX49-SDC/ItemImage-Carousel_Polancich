import { sleep } from 'k6';
import { Rate } from 'k6/metrics';
import http from 'k6/http';
import { check } from "k6";
// import names from './namesData.js';

// let's collect all errors in one metric
let errorRate = new Rate('error_rate');

// See https://k6.io/docs/using-k6/options
export let options = {
  // thresholds: {
  //   error_rate: ['rate < 0.1'],
  // },
  stages: [
    { duration: '30m', target: 2750 },
    // { duration: '1m', target: 2500 },
    // { duration: '1m', target: 2750 },
  ],
  ext: {
    loadimpact: {
      distribution: {
        Dublin: { loadZone: 'amazon:ie:dublin', percent: 100 },
      },
    },
  },
}


//For Querying By ID
export default function() {
  let num = Math.round((Math.random()*9999999));
  let res = http.get(`http://localhost:5000/main?id=${num}`)
  check(res, {
    "status was 200": res => res.status == 200})
  errorRate.add(res.status >= 400)
  sleep(1)
}

// Function to get a random int between max and min
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
//For Querying by Name
// export default function() {
//   let names = [];
//   let name = names[getRandomInt(0,names.length-1)]
//   let res = http.get(`http://localhost:5000/catName?catName=${name}`)
//   check(res, {'status was 200': r => r.status == 200})
//   errorRate.add(res.status >= 400)
//   sleep(1)
// }
