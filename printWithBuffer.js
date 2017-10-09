var https = require('https');
function getAndPrintHTML () {
  var finalData = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      finalData += data;
      console.log(finalData);
    });
    response.on('end', function() {
      console.log('Complete');
    });
  });
}

getAndPrintHTML();
