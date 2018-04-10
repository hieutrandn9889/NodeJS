var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(3000);

app.get("/",function(req, res){
	res.sendFile(__dirname + "/index.html");
});
app.get("/hello",function(req, res){
	res.send("Hello");
});
// truyền paramater
app.get("/tinhtong/:so1/:so2",function(req, res){
	// lay req cua kh
	var n = req.params.so1;
	// ep chuoi thanh integer
	n = parseInt(n);
	var m = req.params.so2;
	m = parseInt(m);
	var tong = n + m;
	res.send("<h1>" + tong + "</h1>");
});