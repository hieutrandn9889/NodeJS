// import express
var express = require("express");
// post
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();
var server = require("http").createServer(app);
server.listen(8000);

// config ejs
// view engine : công thức; ejs: là một đuôi định dạnh của ejs
app.set("view engine", "ejs");
// khai bao layout nằm trong views để biết
app.set("views", "./views");
app.get("/test",function(req, res){
	// render tạo ra giao diện vào lấy đúng tên file ejs
	res.render("hieutran");
});
app.get("/namsinh", function(req, res){
	res.render("namsinh", {namsinh:1989});
});
app.get("/chitiet", function(req, res){
	res.render("chitiet", {solieu:[1989, 1888, 7777, 4444]});
});


// username password

app.post("/login", urlencodedParser, function(req, res){
	var u = req.body.username;
	var p = req.body.password;
	res.send("username: " + u + " password: " + p );
});