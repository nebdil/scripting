var https = require('https');
function getHTML(options, callback) {
  var finalData = '';
  function printHTML (html) {
    console.log(html);
  };
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      finalData += data;
      printHTML(finalData);
    });
  });
}

getHTML();
