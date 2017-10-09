var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
function getAndPrintHTML(options) {
  var finalData = '';
  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      finalData += data;
      console.log(finalData);
    });
  });
}

getAndPrintHTML(requestOptions);
