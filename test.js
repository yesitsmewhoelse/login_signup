const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', function (res) {
  
  let data = '';
  let string = '';
  let match = '';
  let count = 0;
  res.on('data', function(d){
    data += d;
  });
  res.on('end', function () {
    var obj = JSON.parse(data);

    string = obj["data"];

    const arr = string.split(',');
    for(let i=1; i<arr.length ; i+=2) {
        console.log(arr[i]);
      match = arr[i].match(/(\d+)/);
      console.log(match)
      if ( match[0] >= '50') {
          count ++;
      }
    }
    console.log(count);
  });
  // parse json data here...
  

});