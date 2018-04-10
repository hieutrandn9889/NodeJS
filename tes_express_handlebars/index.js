var express = require('express');
var http 	= require("http");
var handlebars = require('express-handlebars');
var app = express();

app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/',function(req, res){	
	res.setHeader('Content-Type', 'text/html');
	res.render('home');
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Test http://%s:%s', host, port);
});