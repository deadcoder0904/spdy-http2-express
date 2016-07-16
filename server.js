var spdy = require('spdy');
var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res){
    res.json({start: 'Server running on http/2 protocol'});
})

var options = {
    key: fs.readFileSync(__dirname + '/host/server.key'),
    cert:  fs.readFileSync(__dirname + '/host/server.crt')
};

// console.log(options)
spdy.createServer(options, app)
	.listen(3000,function(error){
	    if (error) {
	      console.error(error);
	      return process.exit(1);
	    } 
	    else 
	      console.log('Listening on : https://localhost:3000');
	});