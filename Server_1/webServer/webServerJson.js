var http = require("http");
var fs   = require ("fs");
http.createServer (function(req, res){
	res.writeHead(200, {"Content-Type": "application/json"});

	var obj = {
		ho  : "tran",
		ten : "hieu",
		namsinh : 1987
	};
	// do ve cho khach hang nho ham stringify(obj) bien obj thanh json
	res.end(JSON.stringify(obj));
}).listen(8888);