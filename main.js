var fs = require("fs"), 
    http = require('http'),
    url = require('url'),
    Firebase = require('firebase'),
    marked = require('marked'),
    index = fs.readFileSync('index.html');

  http.createServer(responseHandler).listen(8080);
  // var fbRef = new Firebase(process.env.FB_URL);

function responseHandler(req, res) {
  // console.log('asdf' + req);
  if (req.url.match('fav')) {
    res.end('');
    return;
  }

  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
  } else if (req.url.indexOf('markdown') === 1) {
    var textInputArray = req.url.match(/([^/]+$)/);
    var textInput = textInputArray[0];
    encodeURIComponent(textInput);
    console.log('Markdown here', textInput);
    // res.write('Markdown here');
    res.end(decodeURIComponent(marked(textInput)));
    return textInput;
  }
}