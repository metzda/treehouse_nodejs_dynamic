var http = require('http');
var router = require('./router.js');

http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
  
}).listen(1337, '127.0.0.1');
console.log('Server running at localhost:1337');