var https = require('https');
function getAndPrintHTMLChunks() {
  //inside or outside ?
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      console.log(data + "\n");
    });
    response.on('end', function() {
      console.log('Complete');
    });
  });
}

getAndPrintHTMLChunks();
