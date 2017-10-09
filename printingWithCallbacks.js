var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
function printHTML (html) {
  console.log(html);
};
function getHTML(options, callback) {
  var finalData = '';
  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      finalData += data;
      callback(finalData);
    });
  });
}

getHTML(requestOptions, printHTML);
