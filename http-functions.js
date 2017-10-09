var https = require('https');
module.exports = function getHTML (options, callback) {
    var finalData = '';
    https.get(options, function(response) {
      response.setEncoding('utf8');
      response.on('data', function(data) {
        finalData += data;
        callback(finalData);
      });
    });
  }
