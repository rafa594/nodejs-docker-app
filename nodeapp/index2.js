var http = require('http');
var fs = require('fs');

var redis = require('redis');
var client = redis.createClient( '6379',process.env.R_HOST);

client.on('error', function(err){
  console.log('###Error: ' + err);
});

//client.set('my set test');



http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`<h1>Hello World</h1>`);
}).listen(8080);

