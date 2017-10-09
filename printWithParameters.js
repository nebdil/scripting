var https = require('https');
function getAndPrintHTML(options) {
  var finalData = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      finalData += data;
      console.log(finalData);
    });
  });
}

getAndPrintHTML();
