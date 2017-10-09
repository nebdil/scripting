var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};
function printReverse (html) {
  var htmlArr = html.split();
  var htmlStr = htmlArr.reverse().join(' ');
  console.log(htmlStr);
};

getHTML(requestOptions, printReverse);
