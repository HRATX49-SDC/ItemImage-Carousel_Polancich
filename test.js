import { sleep } from 'k6'
import { Rate } from 'k6/metrics'
import http from 'k6/http'
import {getAName} from './namesData.js'

// let's collect all errors in one metric
let errorRate = new Rate('error_rate')

// See https://k6.io/docs/using-k6/options
export let options = {
  // thresholds: {
  //   error_rate: ['rate < 0.1'],
  // },
  stages: [
    // { duration: '1m', target: 2350 },
    // { duration: '1m', target: 2500 },
    { duration: '1m', target: 10 },
  ],
  ext: {
    loadimpact: {
      distribution: {
        Dublin: { loadZone: 'amazon:ie:dublin', percent: 100 },
      },
    },
  },
}

/* 
For Querying By ID
  let num = Math.round((Math.random()*9999999));
  let res = http.get(`http://localhost:5000/main?id=${num}`)
*/

export default function() {
  let name = getAName()
  let res = http.get(`http://localhost:5000/catName?catName=${name}`)
  errorRate.add(res.status >= 400)
  sleep(1)
}
